// Importe les fonctions 
const express = require('express');
const cors = require('cors');
const database= require('./db');

// l'accès de connexion
const connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "ch14fz03",
    port : 3306,
    database : "produits"
});

// verification de la base de données
connection.connect((error) => {
    if (error) {
        console.log("Erreur de connexion à la base de données", error);
        return;
    } 
        console.log("Connecté à la base de données");
});

// exporte la connection
module.exports = connection;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API");
})

app.get("/api/message", (req, res) => {
    res.json({message : "Hello depuis le backend !"});
});

app.get("/connexion", (req, res) => {

    // récupère les éléments de la base de données depuis nodejs  
        req.getConnection((erreur, connection) => {
            if(erreur) {
                console.log(erreur);
            } else {
                connection.query("SELECT * FROM client", [], (err, resultat) => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log("Mission réussie", resultat);
                        res.render("connexion");
                    }
                });
            };
        });
        
     });

app.listen(5000, () => console.log("serveur démarré sur htpp//localhost:5000"));

