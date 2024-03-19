import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { MdClose, MdMenu } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for menu visibility

  // Use useEffect hook to handle initial screen size and resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Adjust breakpoint as needed
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
    { label: "Careers", path: "/careers" },
  ];

  const renderNavLinks = () => (
    <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
      {navLinks.map((link) => (
        <li key={link.label}>
          <NavLink
            to={link.path}
            activeClassName="active"
            className="nav-links"
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-container">
        <NavLink exact to="/" className="navbar-logo">
          ALLDIX.
        </NavLink>

        {renderNavLinks()}

        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
