/// <reference types="Cypress"/>


import SearchPage from '../support/pages/searchPage';
import ResultsPage from '../support/pages/resultsPage';

describe('Despegar automation flight search', ()=>{

    it('Should load the page properly', ()=>{
        SearchPage.navigateToFlightsPage();
    });

    it('Should select the type of flight', ()=>{
        SearchPage.selectTypeOfFlight()
    })

    it('Should select origin and destination', ()=>{
        SearchPage.selectOriginAndDestination()
    })

    it('Should select the dates', ()=>{
        SearchPage.selectDates()
    })

    it('Should select the passengers', ()=>{
        SearchPage.selectPassengers()
    })

    it('Should perform the search', ()=>{
        SearchPage.performSearch()
    })

    it('Should find results', ()=>{
        ResultsPage.haveResults()
    })

    it('Should find a price cheaper than the expected', ()=>{
        ResultsPage.comparePrice()
    })

})