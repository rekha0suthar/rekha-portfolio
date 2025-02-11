import React from 'react';
import upgrad from '../assets/upgrad.png';
import hackethon from '../assets/hackalon.png';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      image: upgrad,
      title: 'upGrad - FSD Bootcamp Completion Certificate',
    },
    {
      image: hackethon,
      title: 'Hackathon - Web Development Winning Certificate',
    },
  ];
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
