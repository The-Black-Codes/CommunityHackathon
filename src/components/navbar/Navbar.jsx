import React from "react";
import "./Navbar.css"
const Navbar = ({ scrollToSection }) => {

  return (
    <header className="header">
        <a href="/navbar" className="logo">Community Hackathon</a>

        <nav className="navbar">
        <a onClick={() => scrollToSection("hero")}>Home</a>
        <a onClick={() => scrollToSection("about")}>About</a>
        <a onClick={() => scrollToSection("flyer")}>Flyer</a>
        {/* <a onClick={() => scrollToSection("registration")}>Registration</a> */}
        <a onClick={() => scrollToSection("footer")}>Footer</a>
        </nav>    
    </header>
  );
};

export default Navbar;