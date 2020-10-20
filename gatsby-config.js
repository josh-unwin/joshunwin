module.exports = {
  siteMetadata: {
    title: `Josh Unwin`,
    description: `Josh Unwin | Full Stack Developer`,
    author: `@joshunwin`,
    url: 'https://www.joshunwin.com',
    urlInsecure: 'http://www.joshunwin.com',
    image: '/images/seo-preview.png',
    twitterUsername: "@joshunwin",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-128638660-1",
        head: true
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects-markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogPosts`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectImages`,
        path: `${__dirname}/src/project-images`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `joshunwin.com`,
        short_name: `joshunwin`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: `src/images/joshunwin.png`, // This path is relative to the root of the site.
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
