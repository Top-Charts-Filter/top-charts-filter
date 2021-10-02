/* Models */
import App from '../../models/appModel.js'
import Category from '../../models/categoryModel.js'
import Publisher from '../../models/publisherModel.js';
/* Constants and Functionalities */
import { AppEarningsTypes, isValidDeviceType, isValidOperatingSystem } from '../../constants/appConstants.js';
import { isValidCategory } from '../../data/categories.js';
import { isValidCountry } from '../../data/countries.js';
import isValidDate from '../validators/dateValidator.js'
import rectifyDate from '../rectifiers/rectifyDate.js'
import stampRank from '../stampers/stampRank.js';

async function parseSingleTopCharts(topCharts, date, country, os, deviceType, category){
    /* this function will parse a single top charts
       it means it creates a database from a given top charts
       also puts applications rankings into the database
       it parses top charts */

    /* Step 1 - Validations and Rectifications */
    // top charts might be empty
    if(!topCharts || topCharts.length === 0){
        // To-do: Notify
        //throw new Error("top charts not provided for parsing");
        return;
    }

    // If the parameters are not valid, do not let move on
    if(!isValidOperatingSystem(os)){
        //throw new Error("operating system is not valid for parsing");
        return;
    }

    if(!isValidCategory(os, category)){
        //throw new Error("category is not valid for parsing");
        return;
    }

    if(!isValidCountry(country)){
        //throw new Error("country is not valid for parsing");
        return;
    }

    if(!isValidDeviceType(deviceType)){
        //throw new Error("device type is not valid for parsing");
        return;
    }

    /* validate and rectify date */
    if(!date){
        //throw new Error("date must be provided for parsing");
        return;
    }

    if(!isValidDate(date)){
        date = rectifyDate(date);
    }
    
    /* Step 2 */

    for(let row of topCharts){

        for(let [index, app] of row.entries()){
            /* for each application */

            // Make sure it is not null or undefined
            if(!app) {
                throw new Error("application data is undefined");
                return;
            }

            // If this application is empty, make it null in order not to add it to the db
            if(Object.keys(app).length === 0){
                app = null;
                continue;
            }

            //console.log("in app purchase type", typeof app.in_app_purchases);
            //console.log("in app value: ", app.in_app_purchases);

            /* In App Purchase data fix */
            if( app.in_app_purchases === "" || typeof  app.in_app_purchases === String){
                app.in_app_purchases = null;
            }

            //app.in_app_purchasesapp.in_app_purchases === "" ? null : app.in_app_purchases;

            //console.log("SONRAA");
            //console.log("in app purchase type", typeof app.in_app_purchases);
            //console.log("in app value: ", app.in_app_purchases);

            /* Convert dates from string to real dates */
            if(app.release_date)
                app.release_date = new Date(Date.parse(app.release_date));
            if(app.updated_date)
                app.updated_date = new Date(Date.parse(app.updated_date));
            app.downloads_revenue_date = new Date(Date.parse(app.downloads_revenue_date));
            //console.log("index is ", index);
            let earningsType;
            /* Figure out its earnings type */
            /* it is coded in its index actually */
            switch (index) {
                case 0:
                    earningsType = AppEarningsTypes.FREE;
                    break;
                case 1:
                    earningsType = AppEarningsTypes.PAID;
                    break;
                case 2:
                    earningsType = AppEarningsTypes.TOP_GROSSING;
                    break;
                default:
                    console.log("earnings type is not valid");
                    //throw new Error("earnings type is not valid");
            }

            /* Remember its rank */
            console.log("selam");
            let rank = app.rank;

            /* Remove rank and delta */

            delete app.rank;
            delete app.delta;

            /* Remove canonical country */
            delete app.canonical_country;

            /* Remember its categories and delete categories from the object */
            let itsCategoriesList = app.categories;
            console.log(itsCategoriesList);

            delete app.categories;

            /* Connect to the DB */
            /* Figure out its existence */

            if(typeof app.id === Number){
                app.id = app.id.toString();
            }
           
            console.log(app.id);
            let application = await App.findOne( { "id": app.id } );
            //console.log("application", application);

            if(application){
                /* if it exists */
                /* update */
                console.log("bu uygulama veritabanında var");
                let updatedApplication = await App.findOneAndUpdate(
                    { id: app.id },
                    app,
                    { new: true });

                app = updatedApplication;

            }
            else{
                /* if it does not exist in the datase */
                /* create new one */
                console.log("Veritabanında YOK");
                let newApplication;
                try {
                    // Get the id of the app's publisher
                    let publisher = await Publisher.findOne({ os: os, publisher_id: app.publisher_id});
                    
                    if(!publisher){
                        /* If this publisher does not exist, create a new document (entry) in the database */
                        publisher = await Publisher.create({ os: os, 
                                                             publisher_name: app.publisher_name,
                                                             publisher_id: app.publisher_id });

                    }

                    app.publisher = publisher._id; /* embed this publisher's id into application itself */

                    newApplication = await App.create(app);

                    /* Keep this application to publisher as well */
                    let itsPublisher = await Publisher.findOneAndUpdate(
                                {os: os, publisher_id: app.publisher_id},
                                {"$addToSet": { applications: newApplication._id} },
                                { new: true });
                    
                    /* Handle categories as well */
                    /* This application has categories,
                        and specific categories will have this application */
                    
                    for(let eachCategory of itsCategoriesList){
                        if(typeof eachCategory === Number) eachCategory = eachCategory.toString();
                        let finalCategory = await Category.findOneAndUpdate( 
                                            { os:os, categoryId: eachCategory} , 
                                            {"$addToSet": { apps: newApplication._id}},
                                            { new: true });
                        //console.log("final category is ", finalCategory);
                        await App.findOneAndUpdate( 
                                             { _id: newApplication._id },
                                             { "$addToSet": { categories: finalCategory._id}});
                    }
                    // To-do: Make categories unique, should not be duplicate in categories list 

                
                } catch (error) {
                    console.error("HATA MEYDANA GELDİ ALO!");
                    console.error(error.message);
                }

                app = newApplication;
                
            }

            /* Stamp its rank into the applicaiton */
            
            /* first create a rank object with these parameters */
            let rankObject = {
                application: app,
                rank: rank,
                country: country,
                os: os,
                date: date,
                category: "6142567b091d3e14366f91b7",
                categoryId: "6014",
                deviceType: deviceType,
                earningsType: earningsType
            };

            stampRank(rankObject)
            
        }
    }

    
    /* Call Stamper to put its ranking into the application */

    //app = stampRank();

    // To-do: convert dates into real dates
    //     release date, download date, update date
    // To-do: determine its earnings type, if exists
    // To-do: Check whether app is in the db or not, if so update
    //        if not add to the db
    // To-do: Handle categories

    // To-do: Remove rank and delta
    // To-do: Call stamper for ranking  

    return true;
}

export default parseSingleTopCharts;