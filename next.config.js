module.exports = {
  env: {
    GA_ENV: process.env.GA_ENV,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
};
