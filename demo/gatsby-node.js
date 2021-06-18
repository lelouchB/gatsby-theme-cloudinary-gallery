
exports.createPages = async ({ actions }) => {
    const basePath = "/";
  
    actions.createPage({
      path: basePath,
      component: require.resolve("./src/pages/index.js"),
    });
  };