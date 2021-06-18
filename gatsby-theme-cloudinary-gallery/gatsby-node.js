const cloudinary = require("cloudinary").v2;

exports.createPages = async ({ actions }, options) => {
  const basePath = options.basePath || "/";

  actions.createPage({
    path: basePath,
    component: require.resolve("./src/pages/index.js"),
  });
};
const createNodeData = (gatsby, image, options) => {
  return {
    id: gatsby.createNodeId(`cloudinary-gallery-${image.public_id}`),
    parent: null,
    public_id: image.public_id,
    cloud_name: options.cloudName,
    internal: {
      type: "CloudinaryGallery",
      content: JSON.stringify(image),
      contentDigest: gatsby.createContentDigest(image),
    },
  };
};

const createCloudinaryImageNodes = (gatsby, cloudinary, options) => {
  const cloudinaryOptions = {
    type: options.type || "upload",
    max_results: options.maxResults || 10,
    prefix: options.prefix || '',
  };

  return cloudinary.api.resources(cloudinaryOptions, (error, result) => {
    result.resources.map((resource) => {
      const nodeData = createNodeData(gatsby, resource, options);
      gatsby.actions.createNode(nodeData);
    });
  });
};

exports.sourceNodes = (gatsby, options) => {
  cloudinary.config({
    cloud_name: options.cloudName,
    api_key: options.apiKey,
    api_secret: options.apiSecret,
  });

  return createCloudinaryImageNodes(gatsby, cloudinary, options);
};
