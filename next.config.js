const withTM = require('next-transpile-modules')(['emailjs-com', 'raw-loader']); // pass the modules you would like to see transpiled


module.exports = {
<<<<<<< HEAD
  trailingSlash: true,
  ...withTM(),
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.md$/i,
      loader: "raw-loader",
    });

    return config;
  }
};
=======
    trailingSlash: true, 
    ...withTM({
      webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.module.rules.push({
          test: /\.md$/i,
          loader: "raw-loader",
        });
    
        return config;
      }
    }),
    };
>>>>>>> Fixed webpack loader config, had to put it inside the Transpiled modules
