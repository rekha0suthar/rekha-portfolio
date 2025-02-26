import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import '../styles/Experience.css';

// experience data list
const experiences = [
  {
    companyName: 'Clutterbot',
    title: 'Full Stack Developer',
    workingPeriod: 'FEB 2023 - NOV 2023',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9134w2feR4zJJ4_23uJYxNF7m3DWWYG1JA&s',
    summary: [
      'Developed one-click annotation & label selection features using React.js & Node.js, boosting productivity by 25%.',
      'Optimized frontend with lazy loading & caching, improving page speed by 20%.',
      'Developed modular code, reducing debugging time by 10%.',
      'Led and managed a 15-member team, enhancing overall productivity',
      'Led daily stand-ups to streamline communication, trackprogress, and resolve blockers.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Python'],
  },
  {
    companyName: 'Learngram',
    title: 'Frontend Developer',
    workingPeriod: 'APR 2022 - JAN 2023',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/oikb5uteskk4bpflrgdi',
    summary: [
      'Improved usability by 5% with optimized React components & third-party libraries.',
      'Increased accessibility by 25% through WCAG 2.1 compliance.',
      'Boosted frontend performance by 10% using Redux for optimized state management.',
      'Standardized CSS variables, reducing development time by 20%.',
    ],
    technologies: [
      'React',
      'Redux',
      'JavaScript',
      'HTML',
      'CSS',
      'Material-UI',
    ],
  },
  {
    companyName: 'Thinkreal',
    title: 'Frontend Developer Intern',
    workingPeriod: 'JAN 2022 - MAR 2022',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1494841318/ljxjdluf0nhvinmdcwoq.png',
    summary: [
      'Developed interactive, mobile-friendly UI components using React.js, HTML, and CSS.',
      'Optimized images and scripts, increasing Lighthouse performance score from 70 to 95.',
    ],
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
];

export default function Experience() {
  return (
    <div className="section-container" id="experience">
      <h1 className="section-title">Experience</h1>
      <div className="title-underline"></div>

      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'transparent',
              border: '1px solid #d3d3d3',
              color: '#fff',
            }}
            contentArrowStyle={{ borderRight: '7px solid #f8f9fa' }}
            date={exp.workingPeriod}
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h2 className="heading">{exp.title}</h2>
            <h4 className="heading">{exp.companyName}</h4>
            <ul>
              {exp.summary.map((resp, idx) => (
                <li key={idx} style={{ textAlign: 'left', color: '#d3d3d3' }}>
                  {resp}
                </li>
              ))}
            </ul>
            <div className="tech-stack">
              {exp.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
