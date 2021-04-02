---
slug: "/blog/the-story-of-building-macaw-ui"
date: "2018-10-04"
title: "The story of building Macaw UI"
image: "https://miro.medium.com/max/1400/1*Wq6c-ZFeimwPTgmrXtY6wA.jpeg"
---

We now have our own component library — Macaw UI, which is how we’ll be keeping our design and brand consistent throughout our product. You can see our library published [here](https://personably.github.io/component-library) and this is the story of how we got to this point.

## How we started out

At the beginning, it was important to get the product built fast and iterate on features as quickly as possible. At the same time we wanted the product to look great and feel intuitive to use. With that in mind, it made the most sense to use an open source component library as it meant that we didn’t have to spend time writing our own components and styles. We chose Semantic UI React and it worked nicely for what we needed at that time. However as the product grew, we found ourselves adding styles to override the [Semantic UI](https://react.semantic-ui.com/) styles and it was all starting to get a bit messy. We wanted to start to create our own style which meant needing more control over how the components in our app looked. So we started to think about a new solution.

## What happened next

We decided pretty quickly that we wanted to take the CSS-in-JS approach over implementing Sass as that required extra build steps that you can read about [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-css-preprocessor-sass-less-etc). We chose to use [styled-components](https://styled-components.com/) because it has a large community behind it and the template literal syntax and Sass support was ideal. We then started to build our own components such as buttons and form fields using styled-components, all of which were reusable and we had complete control over their functionality and styles. Anything new we built in the app used our styled-components and slowly we started to replace existing Semantic UI React components that we had in the app with our new styled-components. Around 75% of our app now uses our own styled-components and in the near future it’ll be 100% 🎉

## Introducing Macaw UI

Our styled-components were working really well in our main app but we very recently redesigned our [marketing site](https://personably.co/) and we wanted to use the same styled-components when we started building it. This was when we decided to build Macaw UI. It was the right time to build a component library as we wanted to share components between two different projects (and any future projects) so we could keep our design brand consistent throughout all our products. Luckily there are lots of useful tools out there that make creating a component library easy. The tools we used to build Macaw UI are:

- GitHub — where we keep all the code and documentation
- npm — where we publish our private package that can be installed across multiple projects
- [Storybook](https://storybook.js.org/) — what we use for developing our components and to display proptypes and example usage.
- GitHub Pages — where we deploy our storybook to so that everyone can see! Check it out [here](https://personably.github.io/component-library)!

## Where we are now and where we want to go

Our component library is published and our [new marketing site](https://personably.co/) is built using just components from Macaw UI. Our next steps are to install Macaw UI in our main app and begin to replace all components with components from Macaw UI and slowly as the app grows so will our component library. We also aim to create a seamless workflow between designing and developing components. A design system could help us with this and so far we have begun to look at tools like [Brand AI](https://brand.ai) and [Framer](https://www.framer.com/). Keep a look out for our first design blog post coming soon!

## Why Macaw UI?

If you’re wondering why our component library is called Macaw UI, well when we built Personably we stuck with the auto-generated name Heroku gave us for our repo, Parakeet. We decided to keep with the theme and Macaws are the prettiest looking and most colourful parrots!

### · · ·

_Originally published at https://www.personably.co on October 4, 2018._
