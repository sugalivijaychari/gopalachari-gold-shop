import React from 'react';
import '../common/Price.css';

const PriceSection = () => {
  return (
    <div className="price-section">
      {/* Left Side - Gold Section */}
      <div className="gold-section">
        <h2>Live Gold Price</h2>
        <p>
            10 grams - ₹80,000/- 24 carats.<br />
            10 grams - ₹73,280/- 22 carats.<br />
            10 grams - ₹68,000/- 85% gold.
        </p>

      </div>

      {/* Right Side - Silver Section */}
      <div className="silver-section">
        <h2>Live Silver Price</h2>
        <p>
            10 grams - ₹950/- 24 carats.<br />
            10 grams - ₹870/- 22 carats.<br />
            10 grams - ₹800/- 85% silver.
        </p>

      </div>
    </div>
  );
};

export default PriceSection;
