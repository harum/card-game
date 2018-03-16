const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  storybookBaseConfig.resolve.extensions.push('.js');
  storybookBaseConfig.resolve.extensions.push('.css');
  storybookBaseConfig.resolve.extensions.push('.scss');
  storybookBaseConfig.resolve.extensions.push('.sass');

  storybookBaseConfig.module.rules.push({
    test: /\.(sass|scss)$/,
    // loader: ['sass-loader'],
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      //resolve-url-loader may be chained before sass-loader if necessary
      use: ['css-loader', 'sass-loader']
    }),
    include: path.resolve(__dirname, '../')
  });

  storybookBaseConfig.plugins.push(
    new ExtractTextPlugin('style.css')
  );

  // Return the altered config
  return storybookBaseConfig;
};
