const custom = require('../config-overrides');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: storybookConfig => {
    const customConfig = custom(storybookConfig);
    return {
      ...storybookConfig,
      module: { ...storybookConfig.module, rules: customConfig.module.rules },
    };
  },
}