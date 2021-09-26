/* this file contains all the countries and a validation method for countries in the system */

export const Countries = {
    "UnitedStates": {
        name: "United States",
        code: "US",
        isActive: true
    },
    "Australia":{
        name: "Australia",
        code: "AU",
        isActive: true
    },
    "Canada":{
        name: "Canada",
        code: "CA",
        isActive: false
    },
    "China":{
        name: "China",
        code: "CN",
        isActive: false
    },
    "France":{
        name: "France",
        code: "FR",
        isActive: false
    },
    "Germany": {
        name: "Germany",
        code: "DE",
        isActive: false
    },
    "GreatBritain": {
        name: "Great Britain",
        code: "GB",
        isActive: false
    },
    "Italy": {
        name: "Italy",
        code: "IT",
        isActive: false
    },
    "SouthKorea": {
        name: "South Korea",
        code: "KR",
        isActive: false
    },
    "Japan": {
        name: "Japan",
        code: "JP",
        isActive: false
    },
    "Russia": {
        name: "Russia",
        code: "RU",
        isActive: false
    }
};

export function isValidCountry(testCountryCode){
    /*  
        this function is responsible for validating the country data in the program
        it must be one of the countries in the systems, otherwise do not let it move forward
    */
   
    if(!testCountryCode){
        // if a null or undefined value for a country comes, 
        // it fails the validation
        return false;
    }

    let allCountryCodes = Object.values(Countries).map( country => (country.code));

    let result = allCountryCodes.includes(testCountryCode);

    return result;
}