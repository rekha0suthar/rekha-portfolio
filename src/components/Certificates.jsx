import React from 'react';
import { certificates } from '../data';
import '../styles/Certificates.css';

const Certificates = () => {
  return (
    <div className="section-container" id="certificates">
      <h1 className="section-title">Certificates</h1>
      <div className="title-underline"></div>
      <div className="certificates-grid">
        {certificates.map((certificate, idx) => (
          <div className="certificate-card" key={idx}>
            <div className="certificate-image-container">
              <img src={certificate.image} alt={certificate.title} />
            </div>
            <h2>{certificate.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
