module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        // id: '',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: '',
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#EAEAEA`,
        theme_color: `#EAEAEA`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
