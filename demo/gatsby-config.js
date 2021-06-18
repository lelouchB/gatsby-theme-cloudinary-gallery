require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-cloudinary-gallery",
      options: {
        basePath:"/gallery",
        cloudName: process.env.CLOUDINARY_CLOUDNAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        type: 'upload',
        prefix:'gatsby-theme-cloudinary-gallery',
        maxResults:15
      },
    },
  ],
};
