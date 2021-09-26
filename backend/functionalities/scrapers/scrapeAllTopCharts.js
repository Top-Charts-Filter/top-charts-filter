
import waitSync from 'wait-sync'
/* Constants and Data */
import { OperatingSystems, DeviceTypes, OperatingSystemsAndDeviceTypes, Limits } from "../../constants/appConstants.js";
import { categories } from "../../data/categories.js";
import { Countries } from "../../data/countries.js";
/* Functionalities */
import ScrapeSingleTopCharts from "./scrapeSingleTopCharts.js";

/* Configurations */
const WAIT_FOR = 4; 

async function ScrapeEveryting(date = new Date()){
    /*
        this function will scrape ENTIRE TOP CHARTS
        for every combination, in other words, for each country
        for each operating system, for each device type and for each category
    */

    /* call scrapeSingleTopCharts
       for every country, for every operating system and device type and for a given date
    */

    /* First filter out de-activated countries */
    const countries = Object.values(Countries).filter( country => country.isActive === true )
                                              .map( country => country.code );

    for(let pair of OperatingSystemsAndDeviceTypes){
        /* for each operating systems and device type pair */
        let os = pair.os;
        let deviceType = pair.deviceType;

        // for each operating system, first fetch all of the categories of this operating system
        let allCategories = categories.filter( category => category.os === os)
                                      .filter( category => category.isActive === true)
                                      .map( category => category.categoryId );
        
        for(let category of allCategories){
            
            for(let country of countries){
                /* for each country code, fetch top charts */
                
                //console.log(os, deviceType, category, country);  // Debug
                let { data } = await ScrapeSingleTopCharts(os, deviceType, date, country, category, Limits.MAX);
                // console.log(data ? data.length : 0); // Debug
                
                // To-do: Call parser to parse top charts
                waitSync(WAIT_FOR);
            }
        }
    }
}


export default ScrapeEveryting;

/* Test Cases */
/*
    ScrapeEveryting();
*/