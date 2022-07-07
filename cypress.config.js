const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    typeOfFlight: 'roundTrip',
    from: 'EZE',
    to: 'BCN',
    dates: 'noDates',
    //dates: '2022-10-20 2022-11-05',
    passengers: '2 1',
    childsAges: '5',
    flightClass: 'Economica',
    maxPrice: 1000000,
  },
  defaultCommandTimeout: 20000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
