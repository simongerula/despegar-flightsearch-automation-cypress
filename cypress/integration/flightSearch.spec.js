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

    it('Origin and Destiny Selected', ()=>{
        SearchPage.selectOriginAndDestiny()
    })

    it('Dates Selected', ()=>{
        SearchPage.selectDates()
    })

    it('Passengers Selected and Search done', ()=>{
        SearchPage.selectPassengers()
    })

    it('Search Done', ()=>{
        SearchPage.performSearch()
    })

    it('Price is cheaper than expected', ()=>{
        ResultsPage.comparePrice()
    })

})