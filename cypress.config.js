const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    baseUrl: 'https://automationexercise.com',

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
      return config;
    },

    specPattern: '**/*.feature',

    supportFile: 'cypress/support/e2e.js',
  },
};
