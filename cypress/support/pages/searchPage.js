class SearchPage {

    constructor(){

        //TYPE OF FLIGHT
        this.roundTripRadioButton = ()=> cy.get("input[value='roundTrip']")
        this.oneWayRadioButton = ()=> cy.get("input[value='oneWay']")
        this.multipleDestinationRadioButton = ()=> cy.get("input[value='multipleDestination']")
        //DESTINY AND ORIGIN
        this.originInput = ()=> cy.get('.input-container .input-tag').eq(0)
        this.originDestinySelect = ()=> cy.get('.ac-group-items')
        this.destinyInput = ()=> cy.get('.input-container .input-tag').eq(1)
        //DATES
        this.noDatesCheckBox = ()=> cy.get('input[class="checkbox-tag"]')
        this.calendarArrow = ()=> cy.get('.sbox5-floating-tooltip-opened > .sbox5-3-floating-tooltip-datepicker-wrapper > .calendar-container > .calendar-arrow-right')
        this.fromDatePicker = ()=> cy.get(`.sbox5-floating-tooltip-opened > .sbox5-3-floating-tooltip-datepicker-wrapper > .calendar-container > [data-month="${Cypress.env('dates').slice(0,7)}"] > .sbox5-monthgrid-dates > :nth-child(${parseInt(Cypress.env('dates').slice(8,10))+1})`)
        this.toDatePicker = ()=> cy.get(`.sbox5-floating-tooltip-opened > .sbox5-3-floating-tooltip-datepicker-wrapper > .calendar-container > [data-month="${Cypress.env('dates').slice(11,18)}"] > .sbox5-monthgrid-dates > :nth-child(${parseInt(Cypress.env('dates').slice(19,21))+1})`)
        this.fromDateInput = ()=> cy.get('.input-container .input-tag').eq(2)
        this.toDateInput = ()=> cy.get('.input-container .input-tag').eq(3)
        //PASSENGERS
        this.passengersInput = ()=> cy.get('.input-container .input-tag').eq(4)
        this.adultsAddButton = ()=> cy.get(':nth-child(1) > .stepper__room__row__stepper__contaer > .sbox5-3-steppers > .steppers-icon-right')
        this.childsAddButton = ()=> cy.get(':nth-child(2) > .stepper__room__row__stepper__contaer > .sbox5-3-steppers > .steppers-icon-right')
        this.childsAgeSelect = (k)=> cy.get(`:nth-child(${k}) > .select__row__options__container > .sbox5-select > .select-container > .select`)
        //FLIGHT CLASS
        this.flightClassSelect = ()=> cy.get('.sbox5-3-select > .select-container > .select-tag')
        this.applyButton = ()=> cy.get('.stepper__room__footer > .sbox5-3-btn')
        //SEARCH
        this.searchButton = ()=> cy.get('.sbox5-button-container--1X4O8 button')

    }

    selectTypeOfFlight = ()=>{

        this.roundTripRadioButton()
        .should('be.checked')
        if (Cypress.env('typeOfFlight') === "oneWay"){
            this.oneWayRadioButton()
            .click({force : true})
        } else if (Cypress.env('typeOfFlight') === "multipleDestination"){
            this.multipleDestinationRadioButton()
            .click({force : true})
        }

    }

    selectOriginAndDestiny = ()=>{

        this.originInput()
        .type(Cypress.env('from'))
        this.originDestinySelect()
        .should('be.visible')
        this.originInput()
        .type('{enter}')
        this.destinyInput()
        .type(Cypress.env('to'))
        this.originDestinySelect()
        .should('be.visible')
        this.destinyInput()
        .type('{enter}')

    }

    selectDates = ()=>{

        let actualDate = new Date()
        let actualMonth = actualDate.getMonth() + 1

        if (Cypress.env('dates') === 'noDates'){
            this.noDatesCheckBox()
            .click()
        } else {
            let monthFromInput = parseInt(Cypress.env('dates').slice(5,7))
            let monthToInput = parseInt(Cypress.env('dates').slice(16,18))
            // If monthfrom < actualmonth add one year
            if (monthFromInput < actualMonth){
                monthFromInput = monthFromInput + 12
            }
            this.fromDateInput()
            .click()
            // Clicks distance to the desired month
            let monthAway = actualMonth-monthFromInput
            if(monthAway < -1){
                for (let monthFromIndex = -1; monthAway < monthFromIndex; monthFromIndex--){
                    this.calendarArrow()
                    .click()
                }
            }
            this.fromDatePicker()
            .click()
            if(Cypress.env('typeOfFlight') != 'oneWay'){
                this.toDateInput()
                .click()
                if (monthToInput < actualMonth){
                    monthToInput = monthToInput + 12
                }
                // Click distance between month from to month to
                if(monthToInput > monthFromInput){
                    monthAway = monthFromInput - monthToInput
                    for (let monthToIndex = -1; monthAway < monthToIndex; monthToIndex--){
                        this.calendarArrow()
                        .click()
                    }
                }
                this.toDatePicker()
                .click()
            }
        }
    }

    selectPassengers = ()=>{

        if (Cypress.env('dates') != 'noDates'){
            this.passengersInput()
            .click()
            for(let i = 1; i < Cypress.env('passengers').slice(0,1); i++){
                this.adultsAddButton()
                .click()
            }
            for(let j = 0; j < Cypress.env('passengers').slice(2,3); j++){
                this.childsAddButton()
                .click()
            }

            if(Cypress.env('childsAges') != ""){
                let numberOfChilds = Cypress.env('passengers').slice(2,3)
                let ages = Cypress.env('childsAges').split(' ')
                let agesIndex = 0
                for(let k = 3 ; k < (parseInt(numberOfChilds)+3); k++){
                    this.childsAgeSelect(k)
                    .select(ages[agesIndex]," años")
                    agesIndex ++
                }
            }

            if(Cypress.env('flightClass') === 'Premium economy'){
                this.flightClassSelect()
                .select('Premium economy')
            } else if (Cypress.env('flightClass') === 'Economica'){
                this.flightClassSelect()
                .select('Economica')
            } else if (Cypress.env('flightClass') === 'Ejecutiva'){
                this.flightClassSelect()
                .select('Ejecutiva/Business')
            } else if (Cypress.env('flightClass') === 'Primera clase'){
                this.flightClassSelect()
                .select('Primera Clase')
            }
            this.applyButton()
            .click()
        }

    }

    performSearch = ()=>{

        this.searchButton()
        .click()
        .click()

    }

}
export default new SearchPage()