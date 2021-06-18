module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Cloudinary Gallery",
    description:
      "Gatbsy Theme to add a Cloudinary Image Gallery to your Gatsby site.",
    author: "AShutosh K Singh",

    social: [
      { name: "Twitter", url: "https://twitter.com/noharashutosh" },
      {
        name: "GitHub",
        url: "https://github.com/lelouchB/gatsby-theme-cloudinary-gallery",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss")],
      },
    },
  ],
};
