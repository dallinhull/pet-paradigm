
import { useState } from 'react';
import '../css/Navbar.css';
import BalloonLogo from '../assets/balloon-dog.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <a href="/"><img src={BalloonLogo} alt="Logo" className="logo" /></a>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item dropdown">
              <a href="/" className="nav-link">Home</a>
              <ul className="dropdown-menu">
                <li><a href="/#our-mission">Mission</a></li>
                <li><a href="/#pexpert-section">Pexpert</a></li>
                <li><a href="/#benefits">Benefits</a></li>
                <li><a href="/#adopt">Adopt</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a href="/dogs" className="nav-link">Dogs</a>
              <ul className="dropdown-menu">
                <li><a href="/dogs/#intro">Info</a></li>
                <li><a href="/dogs/#diet-exercise">Diet & Exercise</a></li>
                <li><a href="/dogs/#groom-handling">Grooming & Handling</a></li>
                <li><a href="/dogs/#vaccinations-medications">Vaccinations & Medications</a></li>
              </ul>
            </li>


            <li className="nav-item dropdown">
              <a href="/cats" className="nav-link">Cats</a>
              <ul className="dropdown-menu">
                <li><a href="/cats/#info">Info</a></li>
                <li><a href="/cats/#zero-to-four-weeks">Zero to Four Weeks</a></li>
                <li><a href="/cats/#four-weeks-to-one-year">Four Weeks to One Year</a></li>
                <li><a href="/cats/#one-year-to-seven-years">One Year to Seven Years</a></li>
                <li><a href="/cats/#seven-years-and-older">Seven Years and Older</a></li>
              </ul>
            </li>

            {/* Birds Dropdown */}
            <li className="nav-item dropdown">
              <a href="/birds" className="nav-link">Birds</a>
              <ul className="dropdown-menu">
                <li><a href="/birds/#info">Info</a></li>
                <li><a href="/birds/#relational-needs">Relational Needs</a></li>
              </ul>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="cta-container">
            <a href="/pexpert" className="consult-button">Consult A Pexpert Today!</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
