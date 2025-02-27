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
      'Developed one-click annotation and label selection features using React.js and Node.js, improving annotation efficiency by 15% and reducing manual selection errors.',
      'Optimized frontend with lazy loading and caching, decreasing page load time by 10% and improving speed index by 3%',
      'Refactored code into modular components, reducing debugging and maintenance time by 7%',
      'Led and managed a 15-member team, improving workflow efficiency and reducing project turnaround time by 10%.',
      'Facilitated daily stand-ups, enhancing team communication, tracking progress effectively, and reducing blockers by 20%.',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Python'],
  },
  {
    companyName: 'Learngram',
    title: 'Frontend Developer',
    workingPeriod: 'APR 2022 - JAN 2023',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/oikb5uteskk4bpflrgdi',
    summary: [
      'Enhanced usability by 5% through optimized React components and integration of third-party libraries, improving user interactions.',
      'Increased accessibility by ensuring WCAG 2.1 compliance, improving navigation and readability for a wider audience.',
      'Improved frontend performance by 5-7% using Redux for optimized state management, reducing unnecessary re-renders.',
      'Standardized CSS variables, improving design consistency and reducing styling-related development time by 10-15%.',
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
      'Developed interactive, mobile-friendly UI components using React.js, HTML, and CSS, including a responsive navigation bar and modal pop-ups, improving mobile usability',
      'Optimized images and scripts under mentor guidance, increasing Lighthouse performance score from 70 to 90 by implementing image compression (WebP format) and lazy loading, reducing page load time by 20%.',
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
