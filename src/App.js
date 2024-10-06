import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import PriceSection from './components/Price';
import Collection from './components/Collection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PriceSection />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
