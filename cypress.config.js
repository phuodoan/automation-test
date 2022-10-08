const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Command timeout overridden for E2E tests
  e2e: {
    fixturesFolder: 'cypress/datasets',
    pageLoadTimeout: 120000,
    defaultCommandTimeout:10000,
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://react-redux.realworld.io',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // baseUrl: "https://google.com",
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});
