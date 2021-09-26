import axios from 'axios'
import waitSync from 'wait-sync'
import { generateTopChartsURL } from '../URLCreator.js'
/* Constants and Data */
import { DeviceTypes, isValidDeviceType, isValidLimit, isValidOperatingSystem, Limits, OperatingSystems } from '../../constants/appConstants.js';
import { categories, isValidCategory } from '../../data/categories.js';
import { Countries, isValidCountry } from '../../data/countries.js';
import isValidDate from '../validators/dateValidator.js';
import rectifyDate from '../rectifiers/rectifyDate.js';


async function ScrapeSingleTopCharts(operatingSystem = OperatingSystems.IOS, 
                                     deviceType = DeviceTypes.IPHONE, 
                                     date = new Date(), 
                                     country = Countries.UnitedStates.code, 
                                     category = "Games", 
                                     limit = Limits.MAX){
    /*
        this function scrapes top charts data from SensorTower by connecting to their APIs
        returns the top charts based on the requested parameters 
    */
    
    /* 1. Validate parameters */

    if(!isValidOperatingSystem(operatingSystem)){
        operatingSystem = OperatingSystems.IOS;
    }
    
    if(!isValidDeviceType(deviceType)){
        deviceType = DeviceTypes.IPHONE;
    }
    
    if(!isValidCountry(country)){
        country = Countries.UnitedStates.code;
    }

    if(!isValidCategory(operatingSystem, category)){
        /* if the category is not valid, make operatings system ios and category games */
        operatingSystem = OperatingSystems.IOS;

        let gamesCategory = categories.filter( category => category.os === OperatingSystems.IOS)
                             .filter( category => category.categoryName === "Games")[0];

        category = gamesCategory.categoryId;
    }

    if(!isValidLimit){
        limit = Limits.MAX;
    }

    if(!isValidDate(date)){
        date = rectifyDate(date);
    }
    
    /* 2. Create URL to Connect to the APIs */

    let theURL = generateTopChartsURL(operatingSystem,
                                      deviceType,
                                      date,
                                      country,
                                      category,
                                      limit);


    /* 3. Connect to the API */

    let hasSucceeded = false; 
    /* this flag indicates whether the fetching operating has succeeded or not */

    let WAITING_BASE_TIME = 0;
    /* first assume, the program does not have to wait */
    
    while(!hasSucceeded){
        /* as long as not able to fetch the data, keep trying */
        try {

            waitSync(WAITING_BASE_TIME);

            let { data: topCharts } = await axios.get(theURL);
            
            hasSucceeded = true; /* flag indicates success */

            return topCharts;

        } catch (error) {
            /* While connecting to the API, it might throw an error */
            
            /* Common Errors */
            /* 429 - Too Many Request Error*/
            const TOO_MANY_REQUEST_ERROR = 429;

            if(error && error.response && error.response.status === TOO_MANY_REQUEST_ERROR){
                /* Do not return without getting the data, keep trying 
                   but this time wait for a lot */
                
                if(WAITING_BASE_TIME === 0) WAITING_BASE_TIME = 2;
                else{
                    /* EXPONENTIAL WAIT */
                    WAITING_BASE_TIME *= WAITING_BASE_TIME;
                }

                continue; /* TRY AGAIN */
            }
            
            //console.log(error); // Debug

            // return empty list if not able to fetch the data despite every attempt 
            return [];
        }
    }
}

export default ScrapeSingleTopCharts;

/* Test Cases */
/*
    let tc = await ScrapeSingleTopCharts();
    console.log(tc.length);
*/