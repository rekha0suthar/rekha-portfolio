import React from 'react';
import {
  FaGithub,
  FaPython,
  FaAws,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiTypescript,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiJsonwebtokens,
  SiVuedotjs,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si';
import '../styles/Skills.css';

const skills = [
  {
    name: 'JavaScript',
    icon: <SiTypescript color="#F7DF1E" />,
    color: '#F7DF1E',
  },
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'NodeJS', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#000000' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000' },
  { name: 'REST API', icon: <FaNodeJs />, color: '#FF5733' },
  { name: 'VueJS', icon: <SiVuedotjs />, color: '#4FC08D' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'SASS', icon: <FaSass />, color: '#CC6699' },
  { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Python', icon: <FaPython />, color: '#FFD43B' },
  { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  { name: 'GitHub', icon: <FaGithub />, color: '#ffffff' },
];

const Skills = () => {
  return (
    <div className="section-container" id="skills">
      <h1 className="section-title">Skills</h1>
      <div className="title-underline"></div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="animated-border"></div>
            <div
              className="skill-icon"
              style={{ '--skill-color': skill.color }}
            >
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
