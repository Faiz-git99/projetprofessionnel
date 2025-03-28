import React, { useState } from 'react'; // Importation de React 
import '../styles/creecompte.css'; // Importation du fichier CSS pour styliser le formulaire


function Creecompte() {  // Déclaration du composant Creecompte
  // Déclaration des états pour chaque champ du formulaire
  const [nom, setNom] = useState(''); // État pour le nom
  const [prenom, setPrenom] = useState(''); // État pour le prénom
  const [dateNaissance, setDateNaissance] = useState(''); // État pour la date de naissance
  const [email, setEmail] = useState(''); // État pour l'email
  const [password, setPassword] = useState(''); // État pour le mot de passe
  const [adresse, setAdresse] = useState(''); // État pour l'adresse de livraison
  const [telephone, setTelephone] = useState(''); // État pour le téléphone
  const [modePaiement, setModePaiement] = useState(''); // État pour le mode de paiement préféré

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire (rechargement de la page)
    
    // Affiche les valeurs saisies par l'utilisateur dans la console
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Date de naissance:', dateNaissance);
    console.log('Email:', email);
    console.log('Mot de passe:', password);
    console.log('Adresse:', adresse);
    console.log('Téléphone:', telephone);
    console.log('Mode de paiement préféré:', modePaiement);
  };

  // Rendu du composant
  return (
    <div> {/* Conteneur principal du formulaire */}
      <h2>Créer un compte</h2> {/* Titre du formulaire */}

      {/* Formulaire de création de compte */}
      <form onSubmit={handleSubmit}>
        
        {/* Champ Nom */}
        <div>
          <label>Nom:</label> {/* Label pour le champ Nom */}
          <input
            type="text" // Type de champ texte
            value={nom} // Valeur du champ liée à l'état nom
            onChange={(e) => setNom(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          />
        </div>

        {/* Champ Prénom */}
        <div>
          <label>Prénom:</label> {/* Label pour le champ Prénom */}
          <input
            type="text" // Type de champ texte
            value={prenom} // Valeur du champ liée à l'état prenom
            onChange={(e) => setPrenom(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          />
        </div>

        {/* Champ Date de naissance */}
        <div>
          <label>Date de naissance:</label> {/* Label pour le champ Date de naissance */}
          <input
            type="date" // Type de champ date
            value={dateNaissance} // Valeur du champ liée à l'état dateNaissance
            onChange={(e) => setDateNaissance(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          />
        </div>

        {/* Champ Email */}
        <div>
          <label>Email:</label> {/* Label pour le champ Email */}
          <input
            type="email" // Type de champ email (valide uniquement un email)
            value={email} // Valeur du champ liée à l'état email
            onChange={(e) => setEmail(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          />
        </div>

        {/* Champ Mot de passe */}
        <div>
          <label>Mot de passe:</label> {/* Label pour le champ Mot de passe */}
          <input
            type="password" // Type de champ mot de passe (masque la saisie)
            value={password} // Valeur du champ liée à l'état password
            onChange={(e) => setPassword(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          />
        </div>

        {/* Champ Adresse de livraison */}
        <div>
          <label>Adresse de livraison:</label> {/* Label pour le champ Adresse de livraison */}
          <input
            type="text" // Type de champ texte
            value={adresse} // Valeur du champ liée à l'état adresse
            onChange={(e) => setAdresse(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          />
        </div>

        {/* Champ Téléphone */}
        <div>
          <label>Téléphone:</label> {/* Label pour le champ Téléphone */}
          <input
            type="tel" // Type de champ téléphone
            value={telephone} // Valeur du champ liée à l'état telephone
            onChange={(e) => setTelephone(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          />
        </div>

        {/* Champ Mode de paiement préféré */}
        <div>
          <label>Mode de paiement:</label> {/* Label pour le champ Mode de paiement préféré */}
          <select
            value={modePaiement} // Valeur du champ liée à l'état modePaiement
            onChange={(e) => setModePaiement(e.target.value)} // Mise à jour de l'état lorsque l'utilisateur modifie la valeur
            required // Indique que ce champ est obligatoire
          >
            <option value="carte">Carte bancaire</option> {/* Option Carte bancaire */}
            <option value="paypal">PayPal</option> {/* Option PayPal */}
            <option value="virement">Virement bancaire</option> {/* Option Virement bancaire */}
          </select>
        </div>

        {/* Bouton de soumission */}
        <button type="submit">Créer un compte</button> {/* Bouton pour soumettre le formulaire */}
      </form>
    </div>
  );
}

export default Creecompte; // Exportation du composant Creecompte
