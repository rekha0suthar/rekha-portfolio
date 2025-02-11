module.exports = {
  // ... other webpack configurations
  ignoreWarnings: [
    {
      module: /tasks-vision\/vision_bundle_mjs\.js$/,
      message: /source map/,
    },
  ],
};
