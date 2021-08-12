class ResultsPage {

    constructor(){

        this.cheaperPriceText = ()=> cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > cluster.COMMON > .eva-3-cluster-basic > .cluster-container > .CLUSTER > .fare-box-container > .fare-container > .fare-wrapper > main-fare > .fare-price-wrapper > .fare > :nth-child(1) > flights-price > :nth-child(1) > flights-price-element > .price-currency > .flight-price-label > em > .amount')
    }

    comparePrice = ()=>{

        this.cheaperPriceText()
        .invoke('text')
        .then(number => parseFloat(number))
        .then(number => number*1000)
        .then(number => console.log('Lower price is : ARS$'+number))
        .should('be.gt',Cypress.env('minPrice'))
        
    }
}
export default new ResultsPage()