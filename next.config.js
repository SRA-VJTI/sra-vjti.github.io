const withTM = require('next-transpile-modules')(['emailjs-com', 'raw-loader']); // pass the modules you would like to see transpiled

module.exports = {
  trailingSlash: true,
  ...withTM({
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.module.rules.push({
        test: /\.md$/i,
        loader: 'raw-loader',
      });

      return config;
    },
  }),
};
