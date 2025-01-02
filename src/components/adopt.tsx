import React from "react";
import "../css/adopt.css";

const AdoptionHelp: React.FC = () => {
  return (
    <div className="adoption-help-section">
      <div className="adoption-header">
        <h2>Looking for your new best friend?</h2>
      </div>

      <div className="adoption-subheader">
        <h3>The following organizations can help you find and adopt the perfect companion:</h3>
      </div>

      <div className="square-container">
        <div className="square">
          <a href="https://bestfriends.org/pet-care-resources/issues/pet-adoption-resources" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
        <div className="square">
          <a href="https://www.aspca.org/" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
        <div className="square">
          <a href="https://www.sterlingshelter.org/humane-society/koi-fish-rescue/" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
        <div className="square">
          <a href="https://savethesnakes.org/snakerescuecall/" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
        <div className="square">
          <a href="https://ftlob.rescuegroups.org/" target="_blank" rel="noopener noreferrer">
          </a>
        </div>
      </div>

      <div className="adoption-description">
        <p>
          We are also happy to help you navigate the adoption process! We will guide you through each step in the process from determining which type of pet is best suited for your family and home environment, to completing the necessary paperwork, to bringing your new loved one home. Please fill out our contact form to request a consultation.
        </p>
      </div>

      <div className="adoption-button">
        <a href="/pexpert" className="pexpert-button-adopt">
          Request a Consultation
        </a>
      </div>
    </div>
  );
};

export default AdoptionHelp;
