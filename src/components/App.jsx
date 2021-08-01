
import './App.scss';
import React from 'react';
import Works from './Works';
import Footer from './Footer';
import TopSection from './TopSection';

function App() {

  return (
    <div className='app bg-stardust'>

      <header className="App-header">

      </header>
      <TopSection />
      <Works />
      <section className="contact">
        <div className="contact_content">
          <h2>Contact</h2>
          <div className="contact_details">
            <p><a href="tel:+48513796565">tel. +48 513 796 565</a></p>
            <p><a href="mailto:asia.dyczka@gmail.com">asia.dyczka@gmail.com</a></p>
          </div>
          <p>Let's work together!</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
