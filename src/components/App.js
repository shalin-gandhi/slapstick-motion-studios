import React from 'react';
import '../styles/App.css';
import Header from './Header';
import FirstFold from './FirstFold';
import Services from './Services';
import AboutUs from './AboutUs';
import Clients from './Clients';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <FirstFold />
      <Services />
      <AboutUs />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
