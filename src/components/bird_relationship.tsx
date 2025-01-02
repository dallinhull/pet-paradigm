import React from "react";
import "../css/birdRelationship.css";
import birdRelationshipImage from "../assets/bird-relationship.jpg"

const BirdRelationship: React.FC = () => {
  return (
    <div className="relationship-section">
      <div className="relationship-left-container">
        <div className="relationship-header">
          <h2>Relational Needs</h2>
        </div>
        <div className="relationship-description">
          <p>
            Each breed is unique in its own way, particularly when it comes to their relational needs and well-being. Unfortunately, birds can experience sadness and depression just like humans. A number of root causes may be responsible for your bird's depression such as an illness (either physical or mental), losing its companion, or increasingly becoming bored.</p> 
            <p><b>Some signs to help identify if your bird is experiencing depression may include the following:</b>
                <br></br>
                <ul>
                    <li>reduced appetite</li>
                    <li> becoming increasingly irritable</li>
                    <li>aggressive behavior</li>
                    <li>songs have a different, more solemn tone</li>
                </ul>
                <br></br>
            Be sure to tell your veterinarian if you see signs of any of these symptoms. Just like many illnesses, identifying and treating the symptoms earlier may drastically increase the lifespan of your birdie.
          </p>
        </div>
        <br></br>
        <br></br>
        <div className="relationship-pexpert-button-container">
          <a href="/pexpert" className="relationship-pexpert-button">
            Talk to a Pexpert!
          </a>
        </div>
      </div>
      <div className="relationship-right-container">
        <img src={birdRelationshipImage} alt="Two perched parrots" className="relationship-image" />
      </div>
      </div>  
  );
};

export default BirdRelationship;
