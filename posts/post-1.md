---
slug: "/blog/how-we-got-cypress-running-solid-tests-in-continuous-integration"
date: "2018-04-26"
title: "How we got Cypress running solid tests in Continuous Integration"
image: "https://miro.medium.com/max/7776/1*z7aahOChZZxNfMInuGUN4w.jpeg"
canonicalURL: "https://personably.co/blog/cypress-tests-continuous-integration"
---

It was time to start writing end to end tests for [Personably](https://personably.co/). We wanted to maintain a smooth UX and save our users from experiencing broken flows. As our product grew, it naturally became harder to test this manually and the need for automated testing became more important.

We looked at a few different options (like Nightwatch) and decided to use [Cypress](https://www.cypress.io/), after they recently open sourced their framework. Cypress does not use [Selenium](https://www.selenium.dev/) so setting it up is very quick and easy (unlike Nightwatch):

- First: `npm install cypress --save-dev`
- Then: `./node_modules/.bin/cypress open`

That’s it. Those two commands create everything you need to get started with Cypress and it’s great.

## What happened when we tried testing in CI

Although Cypress was straight forward to set up locally, we found that setting up and running Cypress in CI created a lot more issues.

It might be helpful to understand our frontend tech stack: React (setup using [create-react-app](https://github.com/facebook/create-react-app)) and [Apollo](https://www.apollographql.com/docs/react/) GraphQL client.

Before the tests will run in CI, there are a couple things you need to do:

1. Add any environment variables you have in your `cypress.env.json` to your CI platform which all must start with `CYPRESS\_` e.g. `CYPRESS_AUTH_TOKEN`
2. If you want to set up your tests to record to the Cypress Dashboard, you need to follow the instructions [here](https://docs.cypress.io/guides/core-concepts/dashboard-service#Setup). Once you have a record key make sure to add it to your CI environment variables, naming it `CYPRESS_RECORD_KEY`.

Once these two steps are done you’re ready to start setting up your configuration to run on the CI platform of your choice. I’ll run through how we got setup on Travis and then Circle.

## Travis

We initially set up our tests to run on Travis. There are two commands that need to be added to the `travis.yml`:

1. A command to run the E2E test - `$(npm bin)/cypress run --record`
2. A command to run the server in the background - `yarn start --silent &`

(Note: You need to use the '&' ampersand to run the server in the background, otherwise it will block execution and hang travis)

Our `travis.yml` now looks like this:

```
language: node_js
node_js:
  - 8
cache:
  directories:
    - node_modules

before_script:
  - yarn build
  - yarn start --silent &

script:
  # run unit tests:
  - yarn tests
  # run E2E tests:
  - \$(npm bin)/cypress run --record
```

This got our tests running on Travis 🎉

But they only passed about 20% of the time, despite all passing locally 🙁

We then decided to try out running our tests on Circle instead to see if the pass rate would be higher. It wasn’t.

Running the tests in CI seemed to highlight a lot more issues that were making our tests flaky. We later solved this (see how if you keep reading) but first this is how we got Cypress running on Circle.

## Circle

Our tests are currently setup to run on Circle 2.0 and just like Travis the same two commands need to be added to the `.circleci/config.yml` but with one small difference. To run the server in the background don’t use the '&' ampersand, instead use `background: true`. However, as our codebase got bigger we started to see the following error happening in Circle more and more:

![Circle CI error](https://miro.medium.com/max/1400/0*cNL7HFwG4X8NvN_W.png)

Our E2E tests were trying to run before the server had finished starting.

After some googling we found a command (`when: on_success`) that we could add to our config which meant the tests would wait to run until the server had successfully started.

Our `.circleci/config.yml` ended up looking like this:

```
version: 2
  jobs:
    build:
      docker:
        - image: cypress/base:6
      working_directory: ~/app
      steps:
        - checkout
        - run: yarn install
        # run unit tests
        - run: yarn test
        - run:
            name: Background the app
            command: yarn start
            background: true
        - run:
            name: Run E2E tests
            command: \$(npm bin)/cypress run --record
            when: on_success
```

## How we made our tests less flaky in CI

As I mentioned before, our pass rate in CI was roughly 20% and we found that this was a result of two main issues:

### Assertions ran before a request had finished

We’re not mocking any requests to our backend server which meant that sometimes a request took a while to finish. We found that because CI wasn’t running against a local instance of our backend server, requests took longer and assertions failed more often. To solve this we used Cypress’s `cy.wait()` command so that the test would explicitly wait for the request to finish before moving on. Here is an example of how we did this:

```
beforeEach(function() {
  cy.route(
    "POST",
    `https://api.graph.cool/simple/v1/${Cypress.env("GRAPHCOOL_ID")}`
  ).as("graphqlQuery");
});

it("should load page correctly", function() {
  cy.wait("@graphqlQuery");
  cy.get("[data-cy=page-content]").should("be.visible");
})
```

### Fetch is not supported

Our `cy.visit()` commands were failing. After reading [this issue](https://github.com/cypress-io/cypress/issues/95) we found that Cypress does not yet support `window.fetch`.

We’re using React Apollo which uses fetch so this was obviously a problem. Until fetch is supported by Cypress, we decided to make the tests fallback to use the fetch polyfill so requests are made using `XHR` instead of `fetch`.

This meant we could still use the normal Cypress capturing and mocking tools. If you want this fallback behaviour only in a specific test you can use:

```
cy.visit("/path", {
  onBeforeLoad: win => {
    win.fetch = null;
  }
});
```

Or if you want this behaviour to persist across all tests then add this command to `support/index.js`:

```
Cypress.on("window:before:load", win => {
  win.fetch = null;
});
```

You can track the progress of `fetch` support [here](https://github.com/cypress-io/cypress/issues/687). Alternative solutions are to stub or spy on `window.fetch` and Cypress have provided some good examples of how to do this [here](https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/stubbing-spying__window-fetch/cypress/integration/spy-stub-clock-spec.js).

## Conclusion

After trying two CI platforms and working through the issues that made our tests flaky it was great to see the green success tick against our test suite! 🎉✅✅✅

![Circle CI success](https://miro.medium.com/max/1400/0*_Yi0qIeyGS3XmSo-.png)

### · · ·

_Originally published at https://www.personably.co on April 26, 2018._
