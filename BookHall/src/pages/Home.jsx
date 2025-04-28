import React from 'react';
import Header from '../components/Header';
import HallDetails from '../components/HallDetails';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200">
      <Header />
      <HallDetails />
    </div>
  );
};

export default Home;
