import React from 'react';
import '../common/Collection.css';

function Collection() {
  return (
    <section className="collection">
      <h2>Our Collection</h2>
      <div className="collection-items">
        
        {/* Earrings - Gold Item */}
        <div className="collection-item gold-item">
          <img src="/earrings.webp" alt="Earrings" className="collection-image"/>
          <h3>Earrings</h3>
          <p>Find the perfect pair of earrings to complement your style.</p>
        </div>

        {/* Rings - Gold Item */}
        <div className="collection-item gold-item">
          <img src="/gold-rings.webp" alt="Rings" className="collection-image"/>
          <h3>Rings</h3>
          <p>Shop our selection of stunning gold rings.</p>
        </div>

        {/* Silver Pattilu - Silver Item */}
        <div className="collection-item silver-item">
          <img src="/silver-pattilu.webp" alt="Silver Pattilu" className="collection-image"/>
          <h3>Silver Pattilu</h3>
          <p>Explore our exquisite collection of traditional silver pattilu.</p>
        </div>

        {/* Silver Chains - Silver Item */}
        <div className="collection-item silver-item">
          <img src="/silver-chain.webp" alt="Silver Chains" className="collection-image"/>
          <h3>Silver Chains</h3>
          <p>Discover finely crafted silver chains perfect for any occasion.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Collection;
