import React from 'react';
import './css/App.css';
import NavHeader from './components/NavHeader';
import Hero from './components/Hero';
import PhotoContainer from './components/PhotoContainer';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="main">
      <NavHeader />

      <Hero />

      <section id="like-section">
        <PhotoContainer />
      </section>

      <Footer />
    </div>

  );
}

export default App;
