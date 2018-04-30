const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env) => {
  const defaultConfig = genDefaultConfig(baseConfig, env);

  // Extend defaultConfig as you need.
  defaultConfig.resolve.extensions.push('.js');
  defaultConfig.resolve.extensions.push('.css');
  defaultConfig.resolve.extensions.push('.scss');
  defaultConfig.resolve.extensions.push('.sass');

  defaultConfig.module.rules.push({
    test: /\.(sass|scss)$/,
    // loader: ['sass-loader'],
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      //resolve-url-loader may be chained before sass-loader if necessary
      use: ['css-loader', 'sass-loader']
    }),
    include: path.resolve(__dirname, '../')
  });

  defaultConfig.plugins.push(
    new ExtractTextPlugin('style.css')
  );

  return defaultConfig;
};
