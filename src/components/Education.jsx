import React from 'react';
import { education } from '../data';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="section-container" id="education">
      <h1 className="section-title">Education</h1>
      <div className="title-underline"></div>

      {education.map((edu, index) => (
        <div
          key={index}
          className="glass-card glass-card-hover fade-in-up"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="timeline-content">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            {edu.period && (
              <p className="education-period">{edu.period}</p>
            )}
            {edu.tagline && (
              <p className="education-tagline">{edu.tagline}</p>
            )}
          </div>
          <img src={edu.logo} alt={edu.institution} />
        </div>
      ))}
    </div>
  );
};

export default Education;
