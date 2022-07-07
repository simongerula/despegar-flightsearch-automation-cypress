# Despegar Flightsearch Automation
***
### Test suite for the parameterized automation of flight search on https://www.despegar.com.ar
### This framework is made with Cypress and POM structure.


It is a practical project, where the flight search is automated. Fully parameterizable from the console.
At the end it makes a comparison with the minimum price established and also shows the lowest price found.

###  The automation has 8 tests.
1. Correct loading of the page.
2. Selection of the type of flight.
3. Selection of origin and destination.
4. Selection of dates.
5. Selection of passengers.
6. Search successful.
7. Results found.
8. Price comparison.

***

### 1. Correct loading of the page
In this test, it is only verified that the page loads completely and correctly.

### 2. Selection of the type of flight
In this test the type of trip to look for is defined, it can be round trip or one way trip.
At the moment multidestination is not developed
>Global variable available:  typeOfTravel [DEFAULT typeOfTravel=roundTrip]

> Available parameters: "roundTrip" / "oneWay".    Example tof=oneWay

### 3. Selection of origin and destination
This test defines the origin and destination of the flight
>Global variable available: from / to [REQUIRED]

> Free parameters. For greater precision you can put the airport code.   Example from=BCN (Josep Tarradellas Barcelona - El Prat Airport)

### 4. Selection of dates
In this test, the departure dates and the return date are chosen (if it is a round trip), otherwise only the departure date is entered. You can also select the option to search for trips without a defined date.
>Global variable available: dates [DEFAULT dates=noDates]

> Available parameters: YYYY-MM-DD YYYY-MM-DD (from to) / noDates

### 5. Selection of passengers
In this test, the number of adult passengers and minor passengers are defined, for each minor passenger their age must be selected. In addition, the class of seats can be selected.
>Global variable available: passengers [DEFAULT passengers="1"] / childsAges [DEFAULT childsAges=""]  /  flightClass [DEFAULT flightClass="Economica"]

> Available parameters: passengers="A C" A(number of adults) / C(number of Childs)

> childsAges="Q W E" QWE(Age of children)

> flightClass = "Economica" / "Premium economy" / "Ejecutiva" / "Primera clase"


### 6. Search successful
In this test it is verified that the search is executed correctly

### 7. Results found
This test checks whether there are flight results found between the origin and the destination.

### 8. Price comparison
In this test it is verified if the cheapest price found is lower than the established price
>Global variable available: minPrice [DEFAULT maxPrice=1000000]

> Available parameters: Integers


***


### Complete examples
#### One way flight from Ezeiza to Rio de Janeiro for two adults and two children aged 5 and 7
> npm run cy:run typeOfFlight="oneWay",from="EZE",to="GIG",passengers="2 2",childsAges="5 7"

or

> npx cypress run --env typeOfFlight="oneWay",from="EZE",to="GIG",passengers="2 2",childsAges="5 7"

#### Roundtrip flight Barcelona Madrid for an adult with dates 2021-10-22 to 2021-11-02. Also want to see the process in the browser
> npm run cy:run:headed typeOfFlight="roundTrip",from="BCN",to="Madrid",dates="2021-10-22 2021-11-02"

or

> npx cypress run --headed --env typeOfFlight="roundTrip",from="BCN",to="Madrid",dates="2021-10-22 2021-11-02"

#### One way flight from New York to Los Angeles, no dates, maximum price 50000. Visible in browser
> npm run cy:run:headed typeOfFlight="oneWay",dates="noDates",maxPrice="50000"

or

> npx cypress run --headed --env typeOfFlight="oneWay",dates="noDates",maxPrice="50000"
