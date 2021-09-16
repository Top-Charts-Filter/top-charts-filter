
/* In this will we will make database configurations 
to connect to the MongoDB database */

import mongoose from 'mongoose'
import { FAILURE } from '../constants/globalConstants.js';

async function connectDB(){
    /* this function will connect to MongoDB */

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            });
        /* here it means the connection is successfully established */
        console.log(`MongoDB Connection Established @ ${conn.connection.host}`.cyan.underline);

    } catch (error) {
        /* if an error occurs while connecting to the database */
        console.error(`An error occurred while connecting to MongoDB ${error.message}`.red.bold.underline);
        
        process.exit(FAILURE);
    }
}

export default connectDB;