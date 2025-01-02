import React from 'react';
import Navbar from '../components/navbar';
import CatBanner from '../components/cat_banner.tsx';
import CatIntro from '../components/cat_intro.tsx';
import CatKitten from '../components/cat_kitten.tsx';
import CatOne from '../components/cat_one.tsx';
import CatSeven from '../components/cat_seven.tsx';
import CatOld from '../components/cat_old.tsx';
import Footer from '../components/footer.tsx';
import Head from '../components/head.tsx';


const Cats: React.FC = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <CatBanner />
        <div id='info'>
        <CatIntro />
        </div>
        <div id='zero-to-four-weeks'>
        <CatKitten />
        </div>
        <div id='four-weeks-to-one-year'>
        <CatOne />
        </div>
        <div id='one-year-to-seven-years'>
        <CatSeven />
        </div>
        <div id='seven-years-and-older'>
        <CatOld />
        </div>
        <Footer />

    </div>
  );
};

export default Cats;