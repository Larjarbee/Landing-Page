import React from 'react';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className=' w-full backgroundDesktop  md:backgroundMobile'>
      <Navbar />
      <Hero />
      <Section />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
