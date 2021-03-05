/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'The Dev Doctor',
    author: 'Matthew Stubbs'
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us1.list-manage.com/subscribe/post?u=ab132cafc28b5e52634a4fceb&amp;id=3bcd9436e0', // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_API_URL || "http://localhost:1337",
        contentTypes: ["category", "writer", "blog-post", "youtube-video", "project"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,400,500,600,700,800`,
          `newsreader`,
          `Open Sans\:300,400,500,600,700,800`,
          `source code pro`
        ],
        display: 'swap'
      }
    }
  ],
}
