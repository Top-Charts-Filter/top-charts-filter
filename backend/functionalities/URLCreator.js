import { DeviceTypes, OperatingSystems, Categories } from '../constants/appConstants.js'
import Countries from '../constants/countries.js';
import { SENSORTOWER_BASE_URL } from '../constants/globalConstants.js';
import { FAILURE } from '../constants/globalConstants.js';
import path from 'path'

export function generateTopChartsURL(requestedOS = OperatingSystems.IOS, 
                     requestedDate = new Date(), 
                     requestedDeviceType = DeviceTypes.IPHONE,
                     requestedCountry = Countries.UnitedStates.code, 
                     requestedCategory = Categories.GAMES,
                     requestedLimit = 200){
    /* this function creates the Remote URL, based on the given paramters 
       it is the SensorTower API URL to fetch data */
    
    let baseURL = new URL(SENSORTOWER_BASE_URL);

    let relativePath = path.basename("/api");
    
    switch (requestedOS) {
        case OperatingSystems.IOS:
            relativePath = path.join(relativePath, OperatingSystems.IOS);
            break;
        case OperatingSystems.ANDROID:
            relativePath = path.join(relativePath, OperatingSystems.ANDROID);
            break;
        default:
            throw new Error("invalid operating system type");
            return FAILURE;
    }

    relativePath = path.join(relativePath, "rankings");
    relativePath = path.join(relativePath, "get_category_rankings");

    /* set the relative path of the base url */
    baseURL.pathname = relativePath;

    /* control the parameters first */
        /* Limit */
    if(requestedLimit <= 0 ){
        throw new Error("limit must be a positive integer");
    }
        /* Device Type */
    switch (requestedDeviceType) {
        case DeviceTypes.ANDROID_MOBILE:
        case DeviceTypes.IPAD:
        case DeviceTypes.IPHONE:
            break;
        default:
            // Make iPhone default device tpye if other than iPhone is sent
            requestedDeviceType = DeviceTypes.IPHONE;
            break;
    }
        /* Country */
    // TO-DO: Control the country, if not exists, make US

        /* Categories */
    // TO-DO: Control categories, if not exists, make Games defult

    /* inject the search parameters */

    baseURL.searchParams.append("category", categoryDecider(requestedOS, requestedCategory));
    baseURL.searchParams.append("country", requestedCountry);
    baseURL.searchParams.append("date", requestedDate.toISOString());
    baseURL.searchParams.append("device", requestedDeviceType);
    baseURL.searchParams.append("limit", requestedLimit);
    baseURL.searchParams.append("offset", 0);

    return baseURL.href;
}

function categoryDecider(os, category){
    /* this function will decide the category code in order to create a URL
       since category ids of android and ios are different */
    // TO-DO: Write a better way to dealing with categories and os
    switch(os){
        case OperatingSystems.IOS:
            switch (category) {
                case Categories.GAMES:
                    return "6014";
                default:
                    return "6014";
            }
        case OperatingSystems.ANDROID:
            switch (category) {
                case Categories.GAMES:
                    return "game";
                default:
                    return "game";
            }
    }
}

export default genereateURL;


/* 
    Test Cases 

    1. Android
    generateTopChartsURL(OperatingSystems.ANDROID, today, DeviceTypes.ANDROID_MOBILE, Countries.Australia.code, Categories.GAMES, 200)
    2. Default
    generateTopChartsURL()

*/