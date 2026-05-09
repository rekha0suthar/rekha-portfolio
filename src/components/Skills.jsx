import React from 'react';
import { skills } from '../data';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="section-container" id="skills">
      <h1 className="section-title">Skills</h1>
      <div className="title-underline"></div>
      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.Icon;
          return (
            <div className="skill-card" key={index}>
              <div className="animated-border"></div>
              <div
                className="skill-icon"
                style={{ '--skill-color': skill.color }}
              >
                <Icon color={skill.color} />
              </div>
              <h3>{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
