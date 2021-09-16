/* this file contains all the countries and a validation method for countries in the system */

export const Countries = {
    "UnitedStates": {
        name: "United States",
        code: "US"
    },
    "Australia":{
        name: "Australia",
        code: "AU"
    },
    "Canada":{
        name: "Canada",
        code: "CA"
    },
    "China":{
        name: "China",
        code: "CN"
    },
    "France":{
        name: "France",
        code: "FR"
    },
    "Germany": {
        name: "Germany",
        code: "DE"
    },
    "GreatBritain": {
        name: "Great Britain",
        code: "GB"
    },
    "Italy": {
        name: "Italy",
        code: "IT"
    },
    "SouthKorea": {
        name: "South Korea",
        code: "KR"
    },
    "Japan": {
        name: "Japan",
        code: "JP"
    },
    "Russia": {
        name: "Russia",
        code: "RU"
    },

    
};

export function isValidCountry(testCountryCode){
    /*  
        this function is responsible for validating the country data in the program
        it must be one of the countries in the systems, otherwise do not let it move forward
    */

    // To-do: Write a country validation logic

    if(!testCountryCode){
        // if a null or undefined value for a country comes, 
        // it fails the validation
        return false;
    }

    let allCountryCodes = Object.values(Countries).map( country => (country.code));

    let result = allCountryCodes.includes(testCountryCode);

    return result;
}