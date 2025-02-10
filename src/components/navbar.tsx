
import { useState } from 'react';
import { Link } from "react-router-dom";
import '../css/Navbar.css';
import BalloonLogo from '../assets/balloon-dog.png';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/"><img src={BalloonLogo} alt="Logo" className="logo" /></Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className={`nav-item dropdown ${isActive("/") ? "active-link" : ""}`}>
              <Link to="/" className="nav-link">Home</Link>
              <ul className="dropdown-menu">
                <li><Link to="/#our-mission">Mission</Link></li>
                <li><Link to="/#pexpert-section">Pexpert</Link></li>
                <li><Link to="/#benefits">Benefits</Link></li>
                <li><Link to="/#adopt">Adopt</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link to="/dogs" className="nav-link">Dogs</Link>
              <ul className="dropdown-menu">
                <li><Link to="/dogs/#intro">Info</Link></li>
                <li><Link to="/dogs/#diet-exercise">Diet & Exercise</Link></li>
                <li><Link to="/dogs/#groom-handling">Grooming & Handling</Link></li>
                <li><Link to="/dogs/#vaccinations-medications">Vaccinations & Medications</Link></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <Link to="/cats" className="nav-link">Cats</Link>
              <ul className="dropdown-menu">
                <li><Link to="/cats/#info">Info</Link></li>
                <li><Link to="/cats/#zero-to-four-weeks">Zero to Four Weeks</Link></li>
                <li><Link to="/cats/#four-weeks-to-one-year">Four Weeks to One Year</Link></li>
                <li><Link to="/cats/#one-year-to-seven-years">One Year to Seven Years</Link></li>
                <li><Link to="/cats/#seven-years-and-older">Seven Years and Older</Link></li>
              </ul>
            </li>

            {/* Birds Dropdown */}
            <li className="nav-item dropdown">
              <Link to="/birds" className="nav-link">Birds</Link>
              <ul className="dropdown-menu">
                <li><Link to="/birds/#info">Info</Link></li>
                <li><Link to="/birds/#relational-needs">Relational Needs</Link></li>
              </ul>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="cta-container">
            <Link to="/pexpert" className="consult-button">Consult A Pexpert Today!</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
