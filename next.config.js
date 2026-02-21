const withTM = require('next-transpile-modules')(['emailjs-com', 'raw-loader']);

module.exports = withTM({
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
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
