/* Models */
import { isValidDeviceType, isValidOperatingSystem } from '../../constants/appConstants.js';
import { isValidCategory } from '../../data/categories.js';
import { isValidCountry } from '../../data/countries.js';
import App from '../../models/appModel.js'
import Category from '../../models/categoryModel.js'


async function parseSingleTopCharts(topCharts, date, country, os, deviceType, category){
    /* this function will parse a single top charts
       it means it creates a database from a given top charts
       also puts applications rankings into the database
       it parses top charts */

    /* Step 1 - Validations and Rectifications */
    // top charts might be empty
    if(!topCharts || topCharts.length === 0){
        // To-do: Notify
        throw new Error("top charts not provided for parsing");
        return;
    }

    // If the parameters are not valid, do not let move on
    if(!isValidOperatingSystem(os)){
        throw new Error("operating system is not valid for parsing");
        return;
    }

    if(!isValidCategory(category)){
        throw new Error("category is not valid for parsing");
        return;
    }

    if(!isValidCountry(country)){
        throw new Error("country is not valid for parsing");
        return;
    }

    if(!isValidDeviceType(deviceType)){
        throw new Error("device type is not valid for parsing");
        return;
    }

    if(!date){
        throw new Error("date must be provided for parsing");
        return;
    }
    

    // To-do: convert dates into real dates
    //     release date, download date, update date
    // To-do: determine its earnings type, if exists
    // To-do: Check whether app is in the db or not, if so update
    //        if not add to the db

    // To-do: Remove rank and delta
    // To-do: Call stamper for ranking

}

export default parseSingleTopCharts;