const mysql2 = require('mysql2');

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