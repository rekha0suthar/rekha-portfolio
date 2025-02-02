import React from 'react';
import moviePhoto from '../assets/movie.png';
import task from '../assets/task.png';
import tutor from '../assets/tutor.png';
import flixx from '../assets/flixx.png';
import eCommerce from '../assets/ecommerce.png';
import imageGallery from '../assets/image-gallery.png';
import expense from '../assets/expense.png';
import secret from '../assets/social.png';
import insta from '../assets/insta.png';
import bankfresh from '../assets/bankfresh.png';

const projects = [
  {
    projectName: 'Bankfresh',
    projectImage: bankfresh,
    projectRepoLink: 'https://github.com/rekha0suthar/bankfresh',
    projectDemoLink: 'https://bankfresh-netbanking.vercel.app/',
    projectSummary:
      'A netbanking application with Online bank account opening, user registeration, Balance, Account Statement, Money Transfer, Card Management and Utility Bills.',
  },
  {
    projectName: 'Insta Clone',
    projectImage: insta,
    projectRepoLink: 'https://github.com/rekha0suthar/insta-clone',
    projectDemoLink: 'https://insta-clone-eight-jade.vercel.app/',
    projectSummary:
      'Insta clone where users can register and see all feeds, add/edit/delete new post, like and comment, Follow/Unfollow others post.',
  },
  {
    projectName: 'Secret Share',
    projectImage: secret,
    projectRepoLink: 'https://github.com/rekha0suthar/secret-sphere',
    projectDemoLink: 'https://secret-sphere.vercel.app/',
    projectSummary:
      'Simple Secret sharing application. Users can create account and share their secret and others will not know whos secret is.',
  },
  {
    projectName: 'Task Manager',
    projectImage: task,
    projectRepoLink: 'https://github.com/rekha0suthar/task-manager',
    projectDemoLink: 'https://taskify-two-umber.vercel.app/',
    projectSummary:
      'A task management application with features like add tasks, edit and delete tasks, Adding due date and marking tasks as completed.',
  },
  {
    projectName: 'Expense Tracker',
    projectImage: expense,
    projectRepoLink: 'https://github.com/rekha0suthar/expense-trackor',
    projectDemoLink: 'https://expense-tracker-app-pearl-ten.vercel.app/',
    projectSummary:
      'A expense tracking application with features like add, expense, add budget for expense, see total expenses and remaining budget.',
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
