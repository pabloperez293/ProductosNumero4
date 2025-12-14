import React from "react";
import "./Navbar.css";
import { UserCartContext } from "../../context/CartContext/UserCartContext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { getTotalItems } = UserCartContext();
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/category/destacado">Destacados</Link>
        </li>
        <li>
          <Link to="/category/mayorista">Mayorista</Link>
        </li>
        <li>
          <Link to="/category/minorista">Minorista</Link>
        </li>

        <li><Link>Carrito</Link>
        {getTotalItems() > 0 && (
          <span className="cart-count">{getTotalItems()}</span>
        )} </li>
      </ul>
    </nav>
  );
};

export default Navbar;
