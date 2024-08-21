import React from 'react';
import moviePhoto from '../assets/movie.png';
import task from '../assets/task.png';
import tutor from '../assets/tutor.png';
import flixx from '../assets/flixx.png';
import eCommerce from '../assets/ecommerce.png';
import imageGallery from '../assets/image-gallery.png';

const projects = [
  {
    projectName: 'Task Manager',
    projectImage: task,
    projectRepoLink: 'https://github.com/rekha0suthar/task-manager',
    projectDemoLink: 'https://task-simplify-manager.netlify.app/',
    projectSummary:
      'A task management application with features like add tasks, edit and delete tasks, Adding due date and marking tasks as completed.',
  },
  {
    projectName: 'E-commerce',
    projectImage: eCommerce,
    projectRepoLink:
      'https://github.com/rekha0suthar/E-commerce-web-application',
    projectDemoLink:
      'https://rekha0suthar.github.io/E-commerce-web-application/',
    projectSummary:
      'An e-commerce platform with features including product management, and responsive design.',
  },
  {
    projectName: 'Movie Flixx',
    projectImage: flixx,
    projectRepoLink: 'https://github.com/rekha0suthar/movie-flixx',
    projectDemoLink: 'https://flixx-creation.netlify.app/',
    projectSummary:
      'Here popular movies and tv shows are showed as cards, clicking on movie/show open its detailed page. Searching is there.',
  },
  {
    projectName: 'Tutor',
    projectImage: tutor,
    projectRepoLink: 'https://github.com/rekha0suthar/tutor',
    projectDemoLink: 'https://awesome-tutor.netlify.app/',
    projectSummary:
      'Simple and responsive tutor application, with different section like chapters, summary and contact page.',
  },
  // {
  //   projectName: "Grocery Shopping Application",
  //   projectImage: "",
  //   projectRepoLink: "https://github.com/rekha0suthar/grocery-shopping",
  //   projectDemoLink: "",
  // },

  {
    projectName: 'Movie Search',
    projectImage: moviePhoto,
    projectRepoLink: 'https://github.com/rekha0suthar/movie-app',
    projectDemoLink: 'https://movie-creation.netlify.app/',
    projectSummary:
      'We can search movie, and movies will be fetched from api, showed as cards, clicking on movie open its detailed page.',
  },

  {
    projectName: 'Image Gallery',
    projectImage: imageGallery,
    projectRepoLink: 'https://github.com/rekha0suthar/lumina-creative',
    projectDemoLink: 'https://lumina-creative-image-gallery.netlify.app/',
    projectSummary:
      'Application containing lots of images organised properly. Different creative pages. Responsive pages can fit on any screen size.',
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h1>Projects</h1>
      <hr />
      <div className="projects-detail">
        {projects.map((project, idx) => {
          return (
            <div className="project-header" key={idx}>
              <img src={project.projectImage} alt="" />
              <hr />
              <div>
                <h2>{project.projectName}</h2>
                <p>{project.projectSummary}</p>
                <a
                  href={project.projectDemoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  Demo
                </a>{' '}
                <a
                  href={project.projectRepoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="repo-btn"
                >
                  Code
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
