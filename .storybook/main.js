const path = require('path');

module.exports = {
  "stories": ["../src/**/*.stories.jsx"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    config.resolve.alias['~'] = path.join(__dirname, '../src/');
    return config;
  },

};