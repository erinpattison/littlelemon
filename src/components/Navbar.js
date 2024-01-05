import Logo from '../assets/Logo.svg';

export const Navbar = () => {
    return(
        <nav>
           <img src={Logo} alt="little lemon logo" />
           <ul className="navlinks section-title">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
           </ul>
        </nav>
    )
}