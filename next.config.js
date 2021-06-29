const withTM = require('next-transpile-modules')(['emailjs-com']); // pass the modules you would like to see transpiled

module.exports = withTM();
