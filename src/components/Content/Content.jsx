import React from 'react';
import './Content.css';

const Content = () => {
  return (
  <div className="hero-section">
  <div className="text-container">
    <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#FFD700' }}>NEPAL ARMY</h1>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
      We Provide Peace & <span style={{ color: '#FFD700' }}>Freedom</span>
    </p>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFD700' }}>
      We Are The Best <span style={{ color: 'white' }}>Strong Military</span> 
        </p>
        <div className="buttons-container">
          <button className="rectangular-button">Rapid Deployment Force</button>
        </div>
  </div>
</div>
  );
};

export default Content;