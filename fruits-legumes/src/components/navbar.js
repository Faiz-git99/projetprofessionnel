import '../styles/navbar.css';
import logo from '../assets/fruitslegumes.jpg'
//Je crée mon composant navbar
function Navbar (){ 
    let titre = "Fruits et Legumes " 

    return(
        <div className="fel-navbar">
          <img src={logo} alt="logo fruits et legumes" className='fel-logo'/>
          {titre}
          
        </div>
    )
}




export default Navbar;