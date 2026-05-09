import React from 'react';
import photo from '../assets/photo.png';
import { about } from '../data';
import '../styles/About.css';

const About = () => {
  return (
    <div className="section-container" id="about">
      <h1 className="section-title">About me</h1>
      <div className="title-underline"></div>

      <div className="about-container">
        <div className="profile-card">
          <div className="profile-image">
            <img src={photo} alt="Rekha Suthar" />
          </div>
          <div className="profile-intro">
            <h2>{about.greeting}</h2>
            <p>{about.intro}</p>
          </div>
        </div>

        <div className="journey-container">
          {about.journey.map((card, idx) => (
            <div className="journey-card" key={idx}>
              <div className="card-content">
                <h3>{card.title}</h3>
                {Array.isArray(card.body) ? (
                  <ul>
                    {card.body.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.body}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
