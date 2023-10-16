import "./Header.css";
import logo from "../../assets/logo.jpg";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <Link to="/"></Link>
        <NavLink></NavLink>
        <img src={logo} className="logo" alt="foco" />

        <h1 className="nombreTienda">MATERIALES</h1>

        <nav className="navbar">
          <a href="#" className="navbarLink">
            Home
          </a>
          <a href="#" className="navbarLink">
            Articulos electricos
          </a>
          <a href="#" className="navbarLink">
            Presupuestos
          </a>
        </nav>

        <ShoppingCart />
      </div>
    </header>
  );
};
