import React from 'react';
import MedicalImage from '../assets/dog-medical.jpg';
import '../css/dogMedical.css'

const DogMedical: React.FC = () => {
  return (
    <div className="dog-medical">
      <h2>Vaccinations & Medications</h2>
      <p>
        You should always consult with your veterinarian, but there is a core set of vaccines that are typically recommended. Vaccines that reduce the exposure risk to things such as hepatitis, rabies, and parvovirus. Others may be determined by your vet depending on the environment in which the dog resides. Some of these include Bordetella bronchiseptica, Borrelia burgdorferi, and Leptospira bacteria.
      </p>
      <img
        src={MedicalImage}
        alt="Dog taking medicine"
        className="dog-vet"
      />
      <div className="medical-button">
        <a href="/pexpert" className="pexpert-button-medical">
          Request a Consultation
        </a>
      </div>
    </div>
  );
};

export default DogMedical;
