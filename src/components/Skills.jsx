import React from 'react';

const skills = [
  {
    frontend: [
      {
        skill: 'Javascript',
        level: 8,
      },
      {
        skill: 'Reactjs',
        level: 8,
      },
      {
        skill: 'Redux',
        level: 5,
      },
      {
        skill: 'Context API',
        level: 9,
      },

      {
        skill: 'Typescript',
        level: 6,
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
        level: 8,
      },
      {
        skill: 'Nodejs',
        level: 7,
      },
      {
        skill: 'Express',
        level: 7,
      },
      {
        skill: 'JWT',
        level: 7,
      },
      {
        skill: 'Flask',
        level: 5,
      },
      {
        skill: 'Python',
        level: 5,
      },
    ],
    databases: [
      {
        skill: 'MongoDB',
        level: 7,
      },
      {
        skill: 'SQL/Sqlite',
        level: 7,
      },
      {
        skill: 'Firebase',
        level: 6,
      },
      {
        skill: 'AWS',
        level: 5,
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
