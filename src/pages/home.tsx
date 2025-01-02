import React from 'react';
import Head from '../components/head.tsx'
import Navbar from '../components/navbar';
import PetBanner from '../components/pet_banner.tsx';
import MissionSection from '../components/mission';
import PexpertSection from '../components/pexpert';
import HealthSection from '../components/health';
import AdoptionHelp from '../components/adopt';
import Footer from '../components/footer.tsx';


const Home: React.FC = () => {
  return (
    <>
      <Head />
      <Navbar />
      <PetBanner />
      <div id='our-mission'>
      <MissionSection />
      </div>
      <div id='pexpert-section'>
      <PexpertSection />
      </div>
      <div id='benefits'>
      <HealthSection />
      </div>
      <div id='adopt'>
      <AdoptionHelp />
      </div>
      <Footer />
    </>
  );
};

export default Home;