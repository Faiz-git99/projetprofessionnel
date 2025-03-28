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

app.post('/components/creecompte', (req, res) => {
    const { Nom_client, Prenom_client, Date_naissance, email, Mot_de_passe_client, Adresse_client, Num_telephone } = req.body;
    
    // Requête SQL corrigée
    const query = `
      INSERT INTO client (Nom_client, Prenom_client, Date_naissance, email, Mot_de_passe_client, Num_telephone, Adresse_client)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    // Exécution de la requête avec les valeurs du corps de la requête
    db.query(query, [Nom_client, Prenom_client, Date_naissance, email, Mot_de_passe_client, Num_telephone, Adresse_client], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Erreur lors de l\'insertion dans la base de données');
      } else {
        res.status(200).send('Compte créé avec succès');
      }
    });
  });
  


app.listen(5000, () => console.log("serveur démarré sur htpp//localhost:5000"));

