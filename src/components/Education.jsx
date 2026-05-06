import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Data Science and Programming',
      institution: 'Indian Institute of Technology, Madras',
      logo: 'https://engageindia.ca/wp-content/uploads/2017/01/IITM-500x500.png',
    },
  ];

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
            <p className="education-tagline">
              Coursework breadth across programming, statistics, and data —
              informs how I design interfaces on top of real-world data flows.
            </p>
          </div>
          <img src={edu.logo} alt={edu.institution} />
        </div>
      ))}
    </div>
  );
};

export default Education;
