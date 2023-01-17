import React from "react";
import world from "../images/world.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={world} className="nav-logo" alt="world" />
      <h1>my travel journal.</h1>
    </nav>
  );
}

export default Navbar;
