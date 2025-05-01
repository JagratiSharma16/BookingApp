import React from 'react';
import Header from '../components/Header';
import HallDetails from '../components/HallDetails';
import SeminarCalander from '../components/SeminarCalander'
import Featuredspeakers from '../components/Featuredspeakers'
import FeaturedEvents from '../components/FeaturedEvents'

const Home = () => {
  return (
    <div >
      <Header />
      <HallDetails />
      <SeminarCalander/>
      <Featuredspeakers/>
      <FeaturedEvents/>
    </div>
  );
};

export default Home;
