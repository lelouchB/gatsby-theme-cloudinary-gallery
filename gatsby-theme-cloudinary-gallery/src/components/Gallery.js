import React from "react";
import { Image, Transformation } from "cloudinary-react";

const Gallery = ({ cloudinaryImages }) => {
  return (
    <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-8">
      {cloudinaryImages.length > 0 &&
        cloudinaryImages.map((cloudinaryImage) => (
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
          </Image>
        ))}
    </main>
  );
};

export default Gallery;
