const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../storybooks/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.resolve.alias = {
      '@hooks': path.resolve(__dirname, '../', 'hooks'),
      '@components': path.resolve(__dirname, '../', 'components'),
      '@utils': path.resolve(__dirname, '../', 'utils'),
      '@pages': path.resolve(__dirname, '../', 'pages'),
    };
    return config;
  },
  core: {
    builder: 'webpack5',
  },
  reactOptions: {
    strictMode: false,
  },
};
