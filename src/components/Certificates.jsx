import React from 'react';
import upgrad from '../assets/upgrad.png';
import hackethon from '../assets/hackalon.png';

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
    <div className="certificate-section" id="certificates">
      <h1>Certificates</h1>
      <hr />
      <div className="certificate-detail">
        {certificates.map((certificate, idx) => {
          return (
            <div className="certificate-header" key={idx}>
              <img src={certificate.image} alt={certificate.title} />
              <div>
                <h2>{certificate.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
