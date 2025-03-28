import '../styles/navbar.css';
import logo from '../assets/fruitslegumes.jpg'
//Je crée mon composant navbar
function Navbar (){ 
    let titre = "Fruits et Legumes " 

    return(
        // <div className="fel-navbar">
        //   <img src={logo} alt="logo fruits et legumes" className='fel-logo'/>
        //   {titre}
        //   <a href="#"><i class="fa fa-fw fa-search"></i> A propos</a>
        //   <a href="#"><i class="fa fa-fw fa-envelope"></i> Menu</a>
        //   <a href="#"><i class="fa fa-fw fa-user"></i> Inscription</a>
        // </div>
        
      
        <div class="navbar">
          <img src={logo} alt="logo fruits et legumes" className='fel-logo'/>
          <a href="#"><i class="fa fa-search"></i></a>
          <i class="fa fa-fw fa-search"></i>
          <input type="text" placeholder="Recherche un article, fruits ou legumes.."></input>
          <a href="#"> Se connecter</a>
          <a href="#"> Menu</a>
        </div>
    

    )
}




export default Navbar;