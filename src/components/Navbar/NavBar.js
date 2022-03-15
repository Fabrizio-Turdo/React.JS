import CartWidget from '../CartWidget/Cartwidget';
import './NavBar.css';
import imagen from '../CartWidget/cart.png';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
         <nav className="Navbar">
             <h1><Link to='/'>AlmaDoraJowelry</Link></h1>
             <ul className="Ul">
                 <li className="Li"><Link to="category/Elemnto1">Elemento 1</Link></li>
                 <li className="Li"><Link to="category/Elemento2">Elemento 2</Link></li>
             </ul>    
             <CartWidget imagen={imagen}/>         
        </nav>
    );
}
export default Navbar;