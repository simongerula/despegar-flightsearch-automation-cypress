const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    typeOfFlight: 'oneWay',
    from: 'EZE',
    to: 'BCN',
    dates: '2023-05-14',
    passengers: '2 1',
    childsAges: '5',
    flightClass: 'Económica',
    maxPrice: 2000000,
  },
  defaultCommandTimeout: 20000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    html: true,
    json: false,
    inlineAssets: true,
    saveAllAttempts: false
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('./cypress/plugins/index.js')(on, config)
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
})
