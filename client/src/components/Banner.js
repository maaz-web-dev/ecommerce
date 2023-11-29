import React from 'react';
import './style.css'; // Create this CSS file for styling

const Banner = ({ item }) => {
  return (
    <div className="banner-container">
      <img className="banner-image" src={item.imgdata} alt={item.dish} />
      <div className="banner-info">
        <h2>{item.dish}</h2>
        <p>{item.address}</p>
        <p>Price: PKR {item.price}</p>
        <p>Rating: {item.rating}</p>
        
      </div>
    </div>
  );
};

export default Banner;