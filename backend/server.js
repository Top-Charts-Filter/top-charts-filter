import express from 'express'
import ScrapeAllTopCharts from './functionalities/scrapers/scrapeAllTopCharts.js';

/* Configure Terminal Colors */
import colors from 'colors';

/* Configure environment variables */
import dotenv from 'dotenv'
dotenv.config();

/* Connect to the DB */
import ConnectDB from './configurations/connectDatabase.js'
await ConnectDB();

const app = express();


app.get("/", (req, res) => res.send("Bonjour!"));

app.listen(5010);

ScrapeAllTopCharts();