import React from "react";
import { Link } from "gatsby";
import { Gallery } from "gatsby-theme-cloudinary-gallery";

const Homepage = () => {
  return (
    <div
      style={{
        backgroundColor: "#eaeaea",
        margin: "0 auto",
        padding: "30px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "4rem",
          textDecoration: "semibold",
        }}
      >
        Gatsby Theme Cloudinary Gallery
      </h1>
      <h2
        style={{
          margin: "3rem",
          textAlign: "center",
          fontSize: "2rem",
          textDecoration: "semibold",
        }}
      >
        Demo Gatsby site to show
        <span style={{ backgroundColor: "#011627", color: "#c792ea" }}>
          `gatsby-theme-cloudinary-gallery`
        </span>
        in action.
        <br /> Head over to
        <Link to="/gallery" style={{ color: "blue" }}>
          /gallery route{" "}
        </Link>
        to see the Image Gallery
      </h2>

      <h2
        style={{
          margin: "3rem",
          textAlign: "center",
          fontSize: "2rem",
          textDecoration: "semibold",
        }}
      >
        Using the{" "}
        <span style={{ backgroundColor: "#011627", color: "#c792ea" }}>
          {" "}
          {`<Gallery/>`}
        </span>{" "}
        component.
      </h2>
      <Gallery />
    </div>
  );
};

export default Homepage;
