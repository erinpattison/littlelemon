import Logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return(
        <nav>
           <img src={Logo} alt="little lemon logo" />
           <ul className="navlinks section-title">
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Menu</li>
            <li><Link to="/booking">Reservations</Link></li>
            <li>Order Online</li>
            <li>Login</li>
           </ul>
        </nav>
    )
}