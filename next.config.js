module.exports = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        require('./scripts/generate-sitemap');
      }
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      return config;
    }
  };
  