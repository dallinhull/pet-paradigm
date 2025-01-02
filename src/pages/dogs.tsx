import React from 'react';
import Navbar from '../components/navbar';
import DogBanner from '../components/dog_banner';
import DogIntro from '../components/dog_intro';
import DogDiet from '../components/dog_diet';
import DogGroom from '../components/dog_groom';
import DogMedical from '../components/dog_medical';
import Footer from '../components/footer';
import Head from '../components/head';

const Dogs: React.FC = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <DogBanner />
        <div id='intro'>
        <DogIntro />
        </div>
        <div id='diet-exercise'>
        <DogDiet />
        </div>
        <div id='groom-handling'>
        <DogGroom />
        </div>
        <div id='vaccinations-medications'>
        <DogMedical />
        </div>
        <Footer />
    </div>
  );
};

export default Dogs;
