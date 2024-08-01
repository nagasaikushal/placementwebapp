import React from 'react';
import WelcomePage from './components//home/WelcomePage';
import Footer from './components/home/Footer';
import Navbar from './components/home/NavBar';
import './App.css';

const HomePage = () => {
  return (
    <div className="app">
      <Navbar/>
      <WelcomePage />
      <Footer />
    </div>
  );
};

export default HomePage;