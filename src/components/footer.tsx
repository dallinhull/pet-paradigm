import React from 'react';
import '../css/footer.css';
import ParadigmLogo from '../assets/paradigm-logo.png'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={ParadigmLogo} alt="Logo" />
        </div>

        <div className="footer-nav">
          <div className="footer-nav-item">
            <a href="/" className="footer-nav-link">Home</a>
            <ul>
              <li><a href="/#our-mission">Mission</a></li>
              <li><a href="/#pexpert-section">Pexpert</a></li>
              <li><a href="/#benefits">Benefits</a></li>
              <li><a href="/#adopt">Adopt</a></li>
            </ul>
          </div>

          <div className="footer-nav-item">
            <a href="/dogs" className="footer-nav-link">Dogs</a>
            <ul>
              <li><a href="/dogs/#intro">Info</a></li>
              <li><a href="/dogs/#diet-exercise">Diet & Exercise</a></li>
              <li><a href="/dogs/#groom-handling">Grooming & Handling</a></li>
              <li><a href="/dogs/#vaccinations-medications">Vaccinations & Medications</a></li>
            </ul>
          </div>

          <div className="footer-nav-item">
            <a href="/cats" className="footer-nav-link">Cats</a>
            <ul>
              <li><a href="/cats/#info">Info</a></li>
              <li><a href="/cats/#zero-to-four-weeks">Zero to Four Weeks</a></li>
              <li><a href="/cats/#four-weeks-to-one-year">Four Weeks to One Year</a></li>
              <li><a href="/cats/#one-year-to-seven-years">One Year to Seven Years</a></li>
              <li><a href="/cats/#seven-years-and-older">Seven Years and Older</a></li>
            </ul>
          </div>

          <div className="footer-nav-item">
            <a href="/birds" className="footer-nav-link">Birds</a>
            <ul>
              <li><a href="/birds/#info">Info</a></li>
              <li><a href="/birds/#relational-needs">Relational Needs</a></li>
            </ul>
          </div>

          <div className="footer-nav-item">
            <a href="/pexpert" className="footer-nav-link">Pexpert Consultation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
