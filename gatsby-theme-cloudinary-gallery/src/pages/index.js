import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Gallery from "../components/Gallery.js";
import Heading from "../components/Heading.js";

const Homepage = () => {
  const data = useStaticQuery(graphql`
    query {
      allCloudinaryGallery {
        nodes {
          public_id
          id
          cloud_name
        }
      }
    }
  `);

  const images = data.allCloudinaryGallery.nodes;

  return (
    <div className="bg-gray-200 min-h-screen p-8">
      <Heading />
      <Gallery cloudinaryImages={images} />
    </div>
  );
};

export default Homepage;
