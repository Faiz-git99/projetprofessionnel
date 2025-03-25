// Importe les fonctions 
const express = require('express');
const cors = require('cors');
const database= require('./db');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API");
})

app.get("/api/message", (req, res) => {
    res.json({message : "Hello depuis le backend !"});
    database.query('SELECT * FROM legumes');
});



app.listen(5000, () => console.log("serveur démarré sur htpp//localhost:5000"));

