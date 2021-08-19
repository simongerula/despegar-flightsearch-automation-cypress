/// <reference types="Cypress"/>

/*Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})*/

import SearchPage from '../support/pages/searchPage'
import ResultsPage from '../support/pages/resultsPage'

describe('Despegar automation flight search', ()=>{

    it('Page loaded', ()=>{
        cy.visit('https://www.despegar.com.ar/vuelos/')
    })

    it('Type of flight Selected', ()=>{
        SearchPage.selectTypeOfFlight()
    })

    it('Origin and Destination Selected', ()=>{
        SearchPage.selectOriginAndDestination()
    })

    it('Dates Selected', ()=>{
        SearchPage.selectDates()
    })

    it('Passengers Selected', ()=>{
        SearchPage.selectPassengers()
    })

    it('Search Done', ()=>{
        SearchPage.performSearch()
    })

    it('Results Found', ()=>{
        ResultsPage.haveResults()
    })

    it('Price is cheaper than expected', ()=>{
        ResultsPage.comparePrice()
    })

})