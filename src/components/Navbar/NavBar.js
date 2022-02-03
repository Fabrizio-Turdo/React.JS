import CartWidget from '../CartWidget/Cartwidget';
import './NavBar.css';
import imagen from '../CartWidget/cart.png';


const Navbar = () => {
    return (
        
         <nav className="Navbar">
             <h1><a href='#AlmaDoraJowelry'>AlmaDoraJowelry</a></h1>
             <ul className="Ul">
                 <li className="Li"><a href="#Aritos">Aritos</a></li>
                 <li className="Li"><a href="#Cadenas">Cadenas</a></li>
             </ul>    
             <CartWidget imagen={imagen}/>         
        </nav>



    );
}
export default Navbar;