import React from 'react';
import Header from '../components/Header';
import HallDetails from '../components/HallDetails';
import SeminarCalander from '../components/SeminarCalander'

const Home = () => {
  return (
    <div >
      <Header />
      <HallDetails />
      <SeminarCalander/>
    </div>
  );
};

export default Home;
