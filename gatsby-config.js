module.exports = {
  siteMetadata: {
    title: `Rose Fabra - Graphic Designer`,
    description: `Rose Fabra - Graphic Designer`,
    author: `Rose Fabra | Graphic Designer`,
    siteUrl: `https://loving-lalande-3dcc46.netlify.app/`,
    menuLinks: [
      {
        name: "Work",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://loving-lalande-3dcc46.netlify.app/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rose Fabra - Graphic Designer`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`,
        icons: [
          {
            src: `favicon-16x16.png`, // This path is relative to the root of the site.
            sizes: `196x196`,
            type: `image/png`,
            purpose: `any maskable`,
          },
          {
            src: `favicon-32x32.png`, // This path is relative to the root of the site.
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any maskable`,
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
