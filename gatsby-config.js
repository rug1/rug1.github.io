module.exports = {
  siteMetadata: {
    title: `Ruth Uwemedimo`,
    description: `Hello. I’m Ruth Uwemedimo, software engineer.`,
    image: 'https://raw.githubusercontent.com/rug1/rug1.github.io/master-source/src/images/working-profile.jpg',
    author: `@ruthuwemedimo`,
    siteUrl: 'https://ruth.io',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts/`,
        name: "posts"
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/r.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
