import React from 'react';
import './App.css';
// import AuthForm from './AuthForm';
import Header from './components/header';
import HeroSection from './components/Hero Section';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      {/* <AuthForm /> */}
      <HeroSection/>
      <Footer />
    </>
  );
}

export default App;
