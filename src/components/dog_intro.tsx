import React from 'react';
import '../css/dogIntro.css';

const DogIntro: React.FC = () => {
  return (
    <div className="container">
      <h2>Did you know that...</h2>
      <p>
        The domestic dog is an extremely social animal and offers a diverse variety of choices as there are well over 300 breeds recognized by the World Canine Organization.
      </p>
      <p>
        Adopting a dog offers mutual benefits between dog and owner. Many studies cite the social benefits of having a companion as well as the reduced feelings of loneliness from adopting a dog. Studies even show medical indicators such as reduced blood pressure and improved lipid profiles.
      </p>
      <p>
        If you have a dog, it is important to make sure that you care for your dog; be mindful of what you feed your dog and provide enough opportunities for exercise. In this page, you will find more information about how to care for your pets throughout the various stages of their lives.
      </p>
    </div>
  );
};

export default DogIntro;
