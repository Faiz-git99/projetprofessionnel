// Importe les fonctions 
const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Bienvenue sur mon API");
})

app.get("/api/message", (req, res) => {
    res.json({message : "Hello depuis le backend !"});
    
})

/* l'accès de connexion
const connection = mysql2.createConnection({
    host : "localhost",
    user : "root",
    password : "ch14fz03",
    port : 3306,
    database : "produits"
});
*/
/*verification de la base de données
connection.connect((error) => {
    if (error) {
        console.log("Erreur de connexion à la base de données", error);
    } else{
        console.log("Connecté à la base de données");
    }
});
*/
app.listen(5000, () => console.log("serveur démarré sur htpp//localhost:5000"));

//module.exports = connection