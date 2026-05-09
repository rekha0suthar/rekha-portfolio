import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase } from 'react-icons/fa';
import { experiences } from '../data';
import '../styles/Experience.css';

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
