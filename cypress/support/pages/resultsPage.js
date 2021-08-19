class ResultsPage {

    constructor(){

        // RESULTS FOUND?
        this.resultsFound = ()=> cy.get('.safe-stay-banner-wrapper')
        // PRICE COMPARISON
        this.cheaperPriceText = ()=> cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > cluster.COMMON > .eva-3-cluster-basic > .cluster-container > .CLUSTER > .fare-box-container > .fare-container > .fare-wrapper > main-fare > .fare-price-wrapper > .fare > :nth-child(1) > flights-price > :nth-child(1) > flights-price-element > .price-currency > .flight-price-label > em > .amount')
        this.cheaperPriceNoDatesText = ()=> cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .COMMON > .margin-bottom-reduced-cluster > :nth-child(1) > .eva-3-cluster-basic > .cluster-container > .cluster-pricebox-container > .amount > .eva-3-pricebox-cluster > .pricebox-value-container > .pricebox-value > .pricebox-big-text')

    }

    haveResults = ()=> {

        this.resultsFound()
        .should('be.visible')

    }

    comparePrice = ()=>{

        if(Cypress.env('dates') === 'noDates'){
            this.cheaperPriceNoDatesText()
            .invoke('text')
            .then(number => parseFloat(number))
            .then(number => number*1000)
            .then(number => cy.log('Lower price for ',Cypress.env('from')+' > '+Cypress.env('to')+' is : ARS$'+number))
            .should('not.be.gt',Cypress.env('minPrice'))
        } else {
            this.cheaperPriceText()
            .invoke('text')
            .then(number => parseFloat(number))
            .then(number => number*1000)
            .then(number => cy.log('Lower price for ',Cypress.env('from')+' > '+Cypress.env('to')+' is : ARS$'+number))
            .should('not.be.gt',Cypress.env('minPrice')) 
        } 

    }
    
}
export default new ResultsPage()