import React from 'react';
import insta from '../assets/insta.png';
import bankfresh from '../assets/bankfresh.png';
import shortify from '../assets/shortify.png';
import seva from '../assets/seva.png';
import finscope from '../assets/finscope.png';
import grocery from '../assets/grocery.png';
import '../styles/Projects.css';

/** Curated flagship projects — deeper demos beat a long list of similar CRUD apps. */
const projects = [
  {
    projectName: 'Grocery Store',
    projectImage: grocery,
    projectRepoLink: 'https://github.com/rekha0suthar/grocery-store',
    projectDemoLink: 'https://grocery-store-ruddy-eight.vercel.app/',
    projectSummary:
      'MERN e-commerce with role-based access for customers, admins, and store managers: catalog, carts, authentication, and admin tooling.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
  },
  {
    projectName: 'FinScope',
    projectImage: finscope,
    projectRepoLink: 'https://github.com/rekha0suthar/budget_tracker',
    projectDemoLink: 'https://finscope-orpin.vercel.app/',
    projectSummary:
      'Full-stack budgeting app: income and expenses, monthly budgets, summaries, and chart-based insights.',
    techStack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    projectName: 'Seva Booking',
    projectImage: seva,
    projectRepoLink: 'https://github.com/rekha0suthar/seva-booking-app',
    projectDemoLink: 'https://seva-booking.vercel.app/',
    projectSummary:
      'Booking flow with mobile-number login: browse offerings, reserve sevas, capture address details, and complete payment/checkout.',
    techStack: ['React', 'Node.js'],
  },
  {
    projectName: 'Shortify',
    projectImage: shortify,
    projectRepoLink: 'https://github.com/rekha0suthar/url-shorten',
    projectDemoLink: 'https://shortify-nu.vercel.app/',
    projectSummary:
      'URL shortener with link creation, lightweight management UI, and basic analytics-oriented structure for short-link usage.',
    techStack: ['React', 'Node.js', 'REST'],
  },
  {
    projectName: 'Bankfresh',
    projectImage: bankfresh,
    projectRepoLink: 'https://github.com/rekha0suthar/bankfresh',
    projectDemoLink: 'https://bankfresh-netbanking.vercel.app/',
    projectSummary:
      'Netbanking-style demo: account signup, balances, statements, transfers, cards, utilities, and account servicing flows.',
    techStack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    projectName: 'Insta Clone',
    projectImage: insta,
    projectRepoLink: 'https://github.com/rekha0suthar/insta-clone',
    projectDemoLink: 'https://insta-clone-eight-jade.vercel.app/',
    projectSummary:
      'Social feed with auth: posts (CRUD), likes and comments, follow/unfollow, and profile-oriented navigation.',
    techStack: ['React', 'Node.js', 'MongoDB'],
  },
];

const Projects = () => {
  return (
    <div className="section-container" id="projects">
      <h1 className="section-title">Projects</h1>
      <div className="title-underline"></div>
      <p className="projects-intro">
        Selected full-stack work. More repos and experiments live on{' '}
        <a
          href="https://github.com/rekha0suthar"
          target="_blank"
          rel="noreferrer"
        >
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
