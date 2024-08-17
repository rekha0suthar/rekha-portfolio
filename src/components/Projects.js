import React from 'react';
import moviePhoto from '../assets/movie.png';
import todo from '../assets/todo.png';
import tutor from '../assets/tutor.png';
import eCommerce from '../assets/ecommerce.png';
import imageGallery from '../assets/image-gallery.png';

const projects = [
  {
    projectName: 'E-commerce Application',
    projectImage: eCommerce,
    projectRepoLink:
      'https://github.com/rekha0suthar/E-commerce-web-application',
    projectDemoLink:
      'https://rekha0suthar.github.io/E-commerce-web-application/',
    projectSummary:
      'An e-commerce platform with features including product management, user authentication, and responsive design.',
  },
  // {
  //   projectName: "Grocery Shopping Application",
  //   projectImage: "",
  //   projectRepoLink: "https://github.com/rekha0suthar/grocery-shopping",
  //   projectDemoLink: "",
  // },
  {
    projectName: 'Todo',
    projectImage: todo,
    projectRepoLink: 'https://github.com/rekha0suthar/todo',
    projectDemoLink: 'https://todos-js-project.netlify.app/',
    projectSummary:
      'This is simple Todo application, where we can add new todo, delete them and mark completed todo by clicking on todo',
  },
  {
    projectName: 'Tutor Application',
    projectImage: tutor,
    projectRepoLink: 'https://github.com/rekha0suthar/tutor',
    projectDemoLink: 'https://awesome-tutor.netlify.app/',
    projectSummary:
      'Simple and responsive tutor application, with different section like chapters, summary and contact page.',
  },
  {
    projectName: 'Image Gallery Application',
    projectImage: imageGallery,
    projectRepoLink: 'https://github.com/rekha0suthar/lumina-creative',
    projectDemoLink: 'https://lumina-creative-image-gallery.netlify.app/',
    projectSummary:
      'Application containing lots of images organised properly. Different creative pages. Responsive pages can fit on any screen size.',
  },
  {
    projectName: 'Movie Search Application',
    projectImage: moviePhoto,
    projectRepoLink: 'https://github.com/rekha0suthar/Movie_Search',
    projectDemoLink: 'https://rekha0suthar.github.io/Movie_Search/',
    projectSummary:
      'We can search movie, and movies will be fetched from api, showed below as cards, clicking on movie open its detailed page.',
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
                  href={project.projectRepoLink}
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
