// next.config.js
module.exports = {
  webpack: (config, { isServer, dev }) => {
    if (dev) {
      // Disable webpack persistent cache in development mode
      config.cache = false;
    }
    return config;
  },
};
