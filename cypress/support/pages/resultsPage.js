class ResultsPage {


    //LOCATORS
    constructor(){

        // RESULTS FOUND?
        this.resultsFound = ()=> cy.get('.tabs-container')
        // PRICE COMPARISON
        this.cheaperPriceText = ()=> cy.get('.eva-3-cluster-basic > .cluster-container > .cluster-pricebox-container > .fare-box-container > .fare-container > .fare-wrapper > main-fare > .fare-price-wrapper > .fare > :nth-child(1) > flights-price > :nth-child(1) > flights-price-element > .price-currency > .flight-price-label > em > .amount').eq(0)
        this.cheaperPriceNoDatesText = ()=> cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .VIRTUAL_INTERLINING_2RT > .margin-bottom-reduced-cluster > :nth-child(1) > .eva-3-cluster-basic > .cluster-container > .cluster-pricebox-container > .amount > .eva-3-pricebox-cluster > .pricebox-value-container > .pricebox-value > .pricebox-big-text')
    }

    // ACTIONS
    haveResults = ()=> {

        this.resultsFound()
        .should('be.visible')

    }

    comparePrice = ()=>{

        const passengers = Cypress.env('passengers').split(' ');

        if(Cypress.env('dates') === 'noDates'){
            this.cheaperPriceNoDatesText()
            .invoke('text')
            .then(number => number.replaceAll('.',''))
            .then(number => parseInt(number))
            .then((number) => {
                expect(number).not.be.gt(Cypress.env('maxPrice'))
                cy.log('Lower price for ',Cypress.env('from')+' > '+Cypress.env('to')+' '+passengers[0]+' Adults and '+passengers[1]+' Children is : ARS$'+number)
            })
        } else {
            this.cheaperPriceText()
            .invoke('text')
            .then(number => number.replaceAll('.',''))
            .then(number => parseInt(number))
            .then((number) => {
                expect(number).not.be.gt(Cypress.env('maxPrice'))
                cy.log('Lower price for ',Cypress.env('from')+' > '+Cypress.env('to')+' '+passengers[0]+' Adults and '+passengers[1]+' Children is : ARS$'+number)
            })
        } 

    }
    
}
export default new ResultsPage()