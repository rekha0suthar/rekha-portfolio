import React from 'react';
import { projects, personal } from '../data';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div className="section-container" id="projects">
      <h1 className="section-title">Projects</h1>
      <div className="title-underline"></div>
      <p className="projects-intro">
        Selected full-stack work. More repos and experiments live on{' '}
        <a href={personal.socials.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="laptop-frame">
              <div className="laptop-screen">
                <img src={project.projectImage} alt={project.projectName} />
              </div>
            </div>
            <div className="project-info">
              <h3>{project.projectName}</h3>
              <p>{project.projectSummary}</p>
              {project.techStack?.length ? (
                <div className="project-tech-tags">
                  {project.techStack.map((t) => (
                    <span key={t} className="project-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="project-links">
                <a
                  href={project.projectDemoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="demo-btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.projectRepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="repo-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
