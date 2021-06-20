
 <div align="center"> 
 <h1>Gatsby Theme Cloudinary Gallery </h1>
</div>

 
<p  align="center">
<i>A Gatsby Theme for adding a Cloudinary Image Gallery to your Gatsby site.</i>
</p>

![screenshot](https://user-images.githubusercontent.com/45850882/122549004-a4c06c80-d04f-11eb-9e0f-a3b8d14eaa53.png)

### [Live Demo](https://gatsby-theme-cloudinary-gallery.vercel.app/) 


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FlelouchB%2Fgatsby-theme-cloudinary-gallery%2Fdemo&env=CLOUDNAME,APIKEY,APISECRET&envDescription=Add%20your%20Cloudinary%20CloudName%2C%20API-Key%20and%20API-Secret.)

## Installation

```bash
npm install --save gatsby-theme-cloudinary-gallery
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-cloudinary-gallery",
      options: {
        cloudName: <YOUR-CLOUDINARY-CLOUDNAME>,
        apiKey: <YOUR-CLOUDINARY-API-KEY>,
        apiSecret: <YOUR-CLOUDIANRY-API-SECRET>,
      },
    },
  ],
};
```

This is the simplest usage of the `gatsby-theme-cloudinary-gallery`. You will need to pass your API Keys as props to the theme. 



### Securing your API Keys
To secure your Cloudianry API Keys, store them as envrionment variables.  Run the following command to install `dotenv` package and create a file named `.env` in the root directory of your project.

```bash
npm install dotenv
touch .env
```

Add the API Keys to the `.env` file.

```
CLOUDINARY_CLOUDNAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET =
```

Update `gatsby-config.js` file like this.

```js
// gatsby-config.js
require('dotenv').config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-cloudinary-gallery",
      options: {
        cloudName: process.env.CLOUDINARY_CLOUDNAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
      },
    },
  ],
};
```

### Theme Options

You can pass the following options to the `gatsby-theme-cloudinary-gallery` theme.

| Option        | Type  | Default           | Required | Description                |
| ------------- | ----------------- | ----------------- | -------- | -------------------------- |
  | `cloudName`    | string  | N/A     | true     | Cloud name of your Cloudinary account, can be obtained from your [Cloudinary console](https://cloudinary.com/console/). This should be stored and retrieved as an environment variable. |
| `apiKey`       | string  | N/A    | true    | API Key of your Cloudinary account, can be obtained from your [Cloudinary console](https://cloudinary.com/console/). This should be stored and retrieved as an environment variable.    |
| `apiSecret`    | string  | N/A     | true     | API Secret of your Cloudinary account, can be obtained from your [Cloudinary console](https://cloudinary.com/console/). This should be stored and retrieved as an environment variable. |
| `basePath` | string   | `/`               | `false`  | URL for Gallery Page       |
| `type`         | string  | false    | `upload` | This is the storage type: upload, private, authenticated, facebook, twitter, gplus, instagram_name, gravatar, youtube, hulu, vimeo, animoto, or dailymotion.            |
| `maxResults`   | integer | false    | 10      | Maximum number of assets to return (up to 500).                                                                                                      |
| `prefix`       | string  | false    | `''`     | Find all resources with a public ID that starts with the given prefix. The resources are sorted by public ID in the response.                                                           |

## Transformations
By default, the images are displayed using the `Image` component from the [Cloudinary React SDK](https://cloudinary.com/documentation/react_integration). Additional transformation is applied using the `Transformation` component.

```jsx
<Image
  key={cloudinaryImage.id}
  cloudName={cloudinaryImage.cloud_name}
  publicId={cloudinaryImage.public_id}
  className="w-full block mx-auto"
>
  <Transformation
    fetchFormat="auto"
    width="800"
    height="800"
    loading="lazy"
    radius="20"
    gravity="face"
    crop="fill"
  />
</Image>;
```
Here are all the default transformations applied to the images.

| Key         | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| fetchFormat | `auto`  | The format of the fetched image. Using `auto`, delivers the image in the  most optimized format for each browser that requests it.  For more details see [image format conversion](https://cloudinary.com/documentation/image_transformations#image_format_conversion).                                                                                                                                                                  |
| width       | `800`   | Width of the fetched image.                                                                                                                                                                                                                                                                                                                                                                                                              |
| height      | `800`   | Height of the fetched image.                                                                                                                                                                                                                                                                                                                                                                                                             |
| loading     | `lazy`  | [Lazy Loading](https://cloudinary.com/documentation/react_image_manipulation#lazy_loading) to delay loading images if they are not yet visible on the screen.                                                                                                                                                                                                                                                                            |
| radius      | `20`    | Round the corner of the images.                                                                                                                                                                                                                                                                                                                                                                                                          |
| gravity     | `face`  | Cloudinary supports built-in face-detection capabilities that allow you to intelligently crop your images.  To automatically crop an image so that the detected face(s) is used as the center of the derived picture, set the gravity parameter to one of the following values:      `face` - the region of the image that includes the single largest face.     `faces` - the region of the image that includes all the faces detected. |
| crop        | `fill`  | Resizes the image to fill the specified dimensions without distortion. The image may be cropped as a result.    For more details [see](https://cloudinary.com/documentation/resizing_and_cropping#resize_and_crop_modes).                                                                                                                                                                                                                |



## `<Gallery />` Component

You can use the Gallery component from the `gatsby-theme-cloudinary-gallery` to embed the Image Gallery in any page.


```jsx
import { Gallery } from "gatsby-theme-cloudinary-gallery";

const Homepage = () => (
  <div>
    <Gallery />
  </div>
);

export default Homepage;
```


## Shadowing

Gatsby themes introduce a concept called [Shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/). This feature allows users to replace a file in the `src` directory that is included in the webpack bundle with their own implementation. This works for React components, pages in `src/pages`, JSON files, TypeScript files, as well as any other imported file (such as `.css`) in your site.

Read more about Shadowing [here](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/).

## Shadowing example

If you’ve installed `gatsby-theme-cloudinary-gallery` you’ll notice that it renders a `Heading` component which is used in the `index` page. If you’d like to change the `Heading` component you can do so with the shadowing API.

### Theme file structure

You can inspect `gatsby-theme-cloudinary-gallery`’s file structure to determine the file path for the file you want to shadow.

```text
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── index.js
├── .gitignore
├── README.md
├── package.json
├── tailwind.config.js
└── src
    ├── components
    │   ├── Heading.js
    │   ├── Gallery.js
    ├── pages
    │   └── index.js
    └── styles
       └── global.css
```

### Customizing the `Heading` component

In this case, the file to shadow is `gatsby-theme-cloudinary-gallery/src/components/Heading.js`.

The shadowing API uses a deterministic file structure to determine which component will be rendered. In order to override the `Heading` component in `gatsby-theme-cloudinary-gallery`, create a file named `demo/src/gatsby-theme-cloudinary-gallery/components/Heading.js`.

Any file that lives in the `src/cloudinary-gallery` directory of the demo’s site will be used instead of a file with the same name located in the theme’s src directory: `gatsby-theme-cloudinary-gallery/src`. This replaces the entire file: to re-use parts of the original file from the theme such as functionality or styling, check out the sections of this doc on [extending](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/#extending-shadowed-files) and [importing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/#importing-the-shadowed-component) shadowed files.

This means that `demo/src/gatsby-theme-cloudinary-gallery/components/Heading.js` will be rendered in place of `gatsby-theme-cloudinary-gallery/src/components/Heading.js`:


<i>For conflicting changes, your local shadowed settings take precedence.</i>
Here you are changing the name of the Image Gallery to **Cute Puppies Gallery**.
```jsx
// src/gatsby-theme-cloudinary-gallery/components/Heading.js
import React from "react";

const Heading = () => {
  return (
    <h1 className="text-4xl md:text-5xl 
    text-center text-gray-800 font-sans font-medium">
      Cute Puppies Gallery
    </h1>
  );
};

export default Heading;
```
You can view this `demo/src/gatsby-theme-cloudinary-gallery/components/Heading.js` file [here](https://github.com/lelouchB/gatsby-theme-cloudinary-gallery/blob/main/demo/src/gatsby-theme-cloudinary-gallery/components/Heading.js).

![screenshot2](https://user-images.githubusercontent.com/45850882/122549044-aee26b00-d04f-11eb-9e36-ff70f4b383b8.png)



## Available Scripts

```bash
yarn dev
```

This will run the `demo` app in development mode.

Navigate to [http://localhost:8000](http://localhost:8000) to view it in the browser.

```bash
yarn build
```
This will build the `demo` app for production.

Outputs to the `demo/public` folder.


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

9. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

10. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

11. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to Gatsby documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.



## Inspiration

This theme is inspired from the [Gatsby Theme Gallery](https://github.com/epilande/gatsby-theme-gallery) and [`gatsby-source-cloudinary`](https://github.com/Chuloo/gatsby-source-cloudinary) plugin.

