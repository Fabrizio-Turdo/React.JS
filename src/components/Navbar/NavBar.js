import CartWidget from '../CartWidget/Cartwidget';
import './NavBar.css';
import imagen from '../CartWidget/cart.png';


const Navbar = () => {
    return (
         <nav className="Navbar">
             <h1><a href='#AlmaDoraJowelry'>AlmaDoraJowelry</a></h1>
             <ul className="Ul">
                 <li className="Li"><a href="#Elemento1">Elemento 1</a></li>
                 <li className="Li"><a href="#Elemento2">Elemento 2</a></li>
             </ul>    
             <CartWidget imagen={imagen}/>         
        </nav>
    );
}
export default Navbar;