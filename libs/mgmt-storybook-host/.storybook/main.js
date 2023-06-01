module.exports = {
  stories: ['../../**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials',
  {
    name: '@storybook/addon-styling',
    options: {
      sass: {
        // Require your Sass preprocessor here
        implementation: require('sass'),
      },
    },
  }],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs