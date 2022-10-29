const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    typeOfFlight: 'roundTrip',
    from: 'EZE',
    to: 'BCN',
    dates: '2023-01-15 2023-01-25',
    passengers: '2 1',
    childsAges: '5',
    flightClass: 'Económica',
    maxPrice: 1000000,
  },
  defaultCommandTimeout: 20000,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
