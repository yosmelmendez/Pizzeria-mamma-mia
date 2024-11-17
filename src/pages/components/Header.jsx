import React from "react";
import backgroundImage from "./Header.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="background-overlay"></div>
      <div className="header-content">
        <h1>¡Pizzeria Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
};

export default Header;
