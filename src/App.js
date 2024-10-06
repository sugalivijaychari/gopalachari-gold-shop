import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import PriceSection from './components/Price';
import Collection from './components/Collection';
import Footer from './components/Footer';

function Home() {
  return (
    <>
      <PriceSection />
      <Collection />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PriceSection />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/offers" element={<div>Offers Page Content</div>} />
        <Route path="/about" element={<div>About Us Page Content</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
