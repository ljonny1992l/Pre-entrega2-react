import "./Header.css";
import logo from "../../assets/logo.png";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <Link to="/"></Link>
        <NavLink></NavLink>
        <img src={logo} className="logo" alt="imagen de un ojo" />

        <h1 className="nombreTienda">LA OPTICA</h1>

        <nav className="navbar">
          <a href="#" className="navbarLink">
            Home
          </a>
          <a href="#" className="navbarLink">
            Lentes de sol
          </a>
          <a href="#" className="navbarLink">
            Lentes de contacto
          </a>
        </nav>

        <ShoppingCart />
      </div>
    </header>
  );
};
