import { DeviceTypes, OperatingSystems, Limits, isValidOperatingSystem, isValidDeviceType } from '../constants/appConstants.js'
import { Countries, isValidCountry } from '../data/countries.js';
import { categories, isValidCategory } from '../data/categories.js';
import { SENSORTOWER_BASE_URL } from '../constants/globalConstants.js';
import { FAILURE } from '../constants/globalConstants.js';

const GAMES = "6014";
// category id of games category in ios operating system for default

export function generateTopChartsURL(requestedOS = OperatingSystems.IOS, 
                                    requestedDeviceType = DeviceTypes.IPHONE,
                                    requestedDate = new Date(),
                                    requestedCountry = Countries.UnitedStates.code, 
                                    requestedCategory = GAMES,
                                    requestedLimit = Limits.MAX ){
    /* this function creates the Remote URL, based on the given parameters 
       it is the SensorTower API URL to fetch data */

    /* 1. Control the parameters first */
        /* Operating System */
    if(!isValidOperatingSystem(requestedOS)){
        // if the provided operating system is not valid,
        // make it ios by default
        requestedOS = OperatingSystems.IOS;
    }

        /* Limit */
    if(requestedLimit <= 0 ){
        // if the requested limit is negative or zero,
        // make it medium by default
        requestedLimit = Limits.MEDIUM;
    }

        /* Device Type */
    if(!isValidDeviceType(requestedDeviceType)){
        // if the provided device type is not valid, make is iphone
        requestedDeviceType = DeviceTypes.IPHONE;
    }

        /* Country */
    // Control the country, if not exists, make US
    if(!isValidCountry(requestedCountry)){
        requestedCountry = Countries.UnitedStates;
    }

        /* Categories */
    // Control categories, if not exists, make Games defult
    if(!isValidCategory(requestedOS, requestedCategory)){
        // if an invalid category comes to this function, make is valid category

        requestedOS = OperatingSystems.IOS;
        /* make games the default category */
        requestedCategory = categories.filter( category => category.os === requestedOS)
                                      .filter( category => categoryId === GAMES);
    }

    /* 2. */

    let baseURL = new URL(SENSORTOWER_BASE_URL);

    let baseForRelativePath = "/api";
    let relativePath = baseForRelativePath

    // Join operating system
    relativePath += "/" + requestedOS;
    // Join rankings
    relativePath += "/rankings";
    // Join get category rankings
    relativePath += "/get_category_rankings";

    /* set the relative path of the base url */
    baseURL.pathname = relativePath;

    /* 3. Inject the search parameters */

    baseURL.searchParams.append("category", requestedCategory);
    baseURL.searchParams.append("country", requestedCountry);
    baseURL.searchParams.append("date", requestedDate.toISOString());
    baseURL.searchParams.append("device", requestedDeviceType);
    baseURL.searchParams.append("limit", requestedLimit);
    baseURL.searchParams.append("offset", 0);

    return baseURL.href;
}

export default generateTopChartsURL;


/* 
    Test Cases 

    1. Android
    generateTopChartsURL(OperatingSystems.ANDROID, today, DeviceTypes.ANDROID_MOBILE, Countries.Australia.code, Categories.GAMES, 200)
    2. Default
    generateTopChartsURL()

*/