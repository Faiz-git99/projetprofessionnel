// Importation de la feuille de style CSS pour le composant Apropos
import '../styles/apropos.css'; 
// Importation de l'image utilisée dans le composant (logo)
import logo from '../assets/frlg.png';

// Définition du composant fonctionnel Apropos
function Apropos() {
  return (
    // Conteneur principal de la section "À propos"
    <div className="apropos">
      {/* Affichage de l'image du logo avec une balise img */}
      <img src={logo} alt="image" />

      {/* Conteneur pour le texte à afficher à côté de l'image */}
      <div className="text-content">
        {/* Titre principal */}
        <h1>À propos</h1>
        
        {/* Premier paragraphe de texte (présentation de l'entreprise) */}
        <p className="p1">
          Bienvenue sur Le Jardin Gourmand, votre destination privilégiée
          pour des fruits et légumes frais de qualité supérieure.
          Nous sommes dédiés à vous offrir une sélection soigneusement
          choisie de produits locaux et de saison, afin de garantir des saveurs authentiques et une nutrition optimale.
        </p>

        {/* Deuxième paragraphe de texte (engagement et valeurs de l'entreprise) */}
        <p className="p2">
          Chez Le Jardin Gourmand, nous croyons que manger des fruits et
          légumes devrait être une expérience agréable et accessible à tous.
          C’est pourquoi nous nous engageons à fournir des produits frais,
          cultivés de manière durable et respectueuse de l’environnement.
          Chaque article que vous trouverez sur notre site est sélectionné
          avec soin pour vous garantir la meilleure qualité.
        </p>
      </div>
    </div>
  );
}

// Exportation du composant pour pouvoir l'utiliser dans d'autres parties de l'application
export default Apropos;
