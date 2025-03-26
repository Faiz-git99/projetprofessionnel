// importe le css de fonctionnement
import '../styles/fonctionnement.css'

// le composant <fonctionnement/>
function Fonctionnements(){


    return(
        <div className="fonctionnemment">
            <h1 className="titre">Comment faire ?</h1>

           <div className="prt1"> 
             <p>1</p>
                <p>
            Visitez lejardingourmand.fr pour 
            </p>
            <p>parcourir nos fruits et </p>
            <p>
                légumes disponibles.
            </p>
            </div>

            <div className="prt2">

                <p>2</p>
                <p>Sélectionnez le kit de</p>
                <p>votre choix, saisissez</p>
                <p>votre adresse de</p>
                <p>livraison et payez</p>
                <p>en ligne en toute sécurité.</p>
                
            </div>

            <div className="prt3">
                
                <p>3</p>
                <p>Les aliments choisis</p>
                <p>seront à votre porte à</p>
                <p>l'heure choisie le lendemain.</p>

            </div>

        </div>
    )
}

export default Fonctionnements;