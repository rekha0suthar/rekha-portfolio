import React from 'react';

const skills = [
  {
    frontend: [
      {
        skill: 'Javascript',
        level: 7,
      },
      {
        skill: 'Reactjs',
        level: 8,
      },

      {
        skill: 'Typescript',
        level: 5,
      },

      {
        skill: 'HTML/CSS, Styling frameworks',
        level: 9,
      },

      {
        skill: 'Vuejs',
        level: 5,
      },
    ],
    backend: [
      {
        skill: 'REST APIs',
        level: 6,
      },
      {
        skill: 'Nodejs',
        level: 3,
      },
      {
        skill: 'Express',
        level: 3,
      },
      {
        skill: 'Flask/Python',
        level: 5,
      },
    ],
    databases: [
      {
        skill: 'MongoDB',
        level: 1,
      },
      {
        skill: 'SQL/Sqlite',
        level: 3,
      },
      {
        skill: 'Firebase',
        level: 3,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skill-section" id="skills">
      <h1>Skills</h1>
      <hr />
      <div>
        {skills.map((skillSet, index) => {
          return (
            <div key={index} className="skill-container">
              {Object.keys(skillSet).map((category) => {
                return (
                  <div key={category} className="skill-wrapper">
                    <h2>{category.toUpperCase()}</h2>
                    {skillSet[category].map((item, idx) => {
                      return (
                        <div key={idx} className="skill-details">
                          <label>{item.skill}</label>
                          <progress
                            type="range"
                            max="10"
                            value={item.level}
                          ></progress>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
