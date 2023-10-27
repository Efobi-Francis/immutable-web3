const { override } = require('customize-cra');
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer');

module.exports = function override(config, env) {
  // If you are in production environment
  if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    });
  }

  config.resolve = {
    fallback: {
      "stream": require.resolve('stream-browserify'),
      "crypto": require.resolve('crypto-browserify'),
      "assert": require.resolve("assert"),
      "path": require.resolve("path-browserify")
    },
  };
  
  return config;
};
