const withTM = require('next-transpile-modules')(['emailjs-com', 'raw-loader']);

module.exports = withTM({
  output: 'export',
  trailingSlash: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/i,
      loader: 'raw-loader',
    });
    return config;
  },
});
