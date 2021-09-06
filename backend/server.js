import express from 'express'

const app = express();


app.get("/", (req, res) => res.send("Bonjour!"));

app.listen(5010);