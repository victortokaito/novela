module.exports = {
  siteMetadata: {
    title: `Novela by Victor`,
    name: `Victor Tokaito`,
    siteUrl: `https://novela.narative.co`,
    description: `Welcome to Novela, the simplest way to digitally catch up with Victor Tokaito.`,
    hero: {
      heading: `Welcome to Novela.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/victortokaito`,
      },
      {
        name: `github`,
        url: `https://github.com/victortokaito`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/victortokaito`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/victortokaito/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/victortokaito`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
