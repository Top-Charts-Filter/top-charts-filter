import App from '../../models/appModel.js'

async function stampRank(rankObject){
    /* this function puts a rank stamp into the application in the database
       in order words, it adds information about the applications ranking 
       on a specific country, date and category */
    
    /*
        Rank data must include
            1. ApplicationID or application
            2. OS
            3. DeviceType
            4. Country
            5. Date
            6. EarningsType
            7. Rank
    */

    /* Validations */
    // To-Do: Rank must be positive
    // To-Do: EarnigsType must be valid
    // To-Do: Date must be rectified
    // To-Do: Country must exist
    // To-Do: DeviceType must exist
    // To-Do: Operating System must exist
   

    /* Assuming this application exists, since this will always be called after
       parser, and parser will always create an application */
    
    /* First figure out whether this application has this exact rank or not */
    // To-do: If the same rank exists, do not let it

    let appId = rankObject.application._id;

    delete rankObject.application;

    try {
        let application = await App.findOneAndUpdate(
            { _id: appId },
            { "$addToSet": { ranks: rankObject }}
        );        
    } catch (error) {
        console.error("error occured while stamping ranks into an application");
        console.error(error);
        return false;
    }
}

export default stampRank;