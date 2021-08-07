/// <reference types="Cypress"/>

import SearchPage from '../support/pages/searchPage'

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

    it.skip('Passengers Selected', ()=>{
        SearchPage.selectPassengers()
    })

    it('Search done', ()=>{
        SearchPage.performSearch()
    })

})