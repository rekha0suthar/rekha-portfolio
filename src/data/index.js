// =============================================================================
//  Portfolio content — single source of truth.
//  Edit values in this file to refresh anything shown on the site.
//  Components import what they need from here, e.g.:
//      import { personal, projects } from '../data';
// =============================================================================

import insta from '../assets/insta.png';
import bankfresh from '../assets/bankfresh.png';
import shortify from '../assets/shortify.png';
import seva from '../assets/seva.png';
import finscope from '../assets/finscope.png';
import grocery from '../assets/grocery.png';

import upgrad from '../assets/upgrad.png';
import hackethon from '../assets/hackalon.png';
import genai from '../assets/genai.png';
import sql from '../assets/sql.png';

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
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiRedux,
  SiFirebase,
  SiJsonwebtokens,
  SiVuedotjs,
  SiBootstrap,
  SiTailwindcss,
} from 'react-icons/si';

// ---------------------------------------------------------------------------
//  Personal info — Home / Navbar / Footer / Contact
// ---------------------------------------------------------------------------
export const personal = {
  fullName: 'Rekha Suthar',
  shortName: 'RS', // navbar brand
  firstName: 'Rekha', // recipient name in the contact form
  email: 'rekhasuthar0suthar@gmail.com',

  heroHeading: 'Code with purpose, build with passion',
  typewriterRoles: [
    'Full Stack Developer',
    'React & Node.js',
    'IIT Madras · Data Science',
  ],
  credentialLine: 'B.Sc. Data Science & Programming · IIT Madras',

  resumeUrl:
    'https://docs.google.com/document/d/19OqmUb553pcvdMQSLro7EVxCk2ysf4dNw4EDGHIWZdw/edit?usp=sharing',

  socials: {
    linkedin: 'https://www.linkedin.com/in/rekha0suthar/',
    github: 'https://github.com/rekha0suthar/',
  },
};

// ---------------------------------------------------------------------------
//  Navbar links — order here matches the order shown in the navbar.
//  `id` must match the section's `id` attribute on the page.
// ---------------------------------------------------------------------------
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

// ---------------------------------------------------------------------------
//  About — top intro + journey cards
//  Each journey card's `body` may be a string OR an array of bullets.
// ---------------------------------------------------------------------------
export const about = {
  greeting: "Hi, I'm Rekha Suthar!",
  intro:
    'Frontend-focused full-stack engineer (React, Redux, MERN). I ship performant interfaces, reusable components, and pragmatic state management. IIT Madras (Data Science & Programming) grounding means I enjoy products where data quality, UX, and engineering meet — including thoughtful use of ML/AI features when they solve real user problems.',

  journey: [
    {
      title: 'My Journey',
      body: 'B.Sc. Data Science & Programming from IIT Madras: strong fundamentals in data and programming, applied today through robust web interfaces and full-stack delivery.',
    },
    {
      title: 'Technical Expertise',
      body: 'Production experience with React, Redux, REST APIs, and the MERN stack; comfortable owning features end to end—from UI polish to API integration and performance tuning.',
    },
    {
      title: 'Problem Solving',
      body: 'Adept at navigating complex data issues and developing innovative solutions under pressure.',
    },
    {
      title: 'Passions & Interests',
      body: [
        'Constantly exploring new technologies and applying them to innovative projects.',
        'Building applications that not only function flawlessly but also provide an exceptional user experience.',
        'While coding is my passion, I maintain balance through reading, anime, and family time.',
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
//  Education
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: 'Bachelor of Science in Data Science and Programming',
    institution: 'Indian Institute of Technology, Madras',
    logo: 'https://engageindia.ca/wp-content/uploads/2017/01/IITM-500x500.png',
    tagline:
      'Coursework breadth across programming, statistics, and data — informs how I design interfaces on top of real-world data flows.',
  },
];

// ---------------------------------------------------------------------------
//  Work experience timeline
// ---------------------------------------------------------------------------
export const experiences = [
  {
    companyName: 'Learngram',
    title: 'Frontend Developer',
    workingPeriod: 'APR 2023 - JAN 2024',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/oikb5uteskk4bpflrgdi',
    summary: [
      'Enhanced usability through optimized React components and third-party integrations, improving key user interactions.',
      'Shipped an "Add Class" calendar feature in React, improving UX and reducing follow-on implementation rework.',
      'Improved frontend performance (~5-7%) with Redux-driven state boundaries, trimming unnecessary re-renders.',
      'Refactored styling with CSS design tokens (variables), improving consistency and cutting styling iteration time (~10%).',
      'Implemented lazy loading and route-level code splitting, contributing to stronger SEO signals (SEO score ~70% to ~80%).',
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
];

// ---------------------------------------------------------------------------
//  Projects — curated flagship work; deeper demos beat a long list of CRUD apps.
// ---------------------------------------------------------------------------
export const projects = [
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

// ---------------------------------------------------------------------------
//  Skills grid — `Icon` is a *component reference* (not JSX) so this file
//  stays plain JS. The component renders it with `<skill.Icon />`.
// ---------------------------------------------------------------------------
export const skills = [
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'NodeJS', Icon: FaNodeJs, color: '#339933' },
  { name: 'Express', Icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'JWT', Icon: SiJsonwebtokens, color: '#000000' },
  { name: 'REST API', Icon: FaNodeJs, color: '#FF5733' },
  { name: 'VueJS', Icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'SASS', Icon: FaSass, color: '#CC6699' },
  { name: 'Bootstrap', Icon: SiBootstrap, color: '#7952B3' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Python', Icon: FaPython, color: '#FFD43B' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
];

// ---------------------------------------------------------------------------
//  Certificates
// ---------------------------------------------------------------------------
export const certificates = [
  { image: sql, title: 'hackerrank - SQL (Adanced) Certificate' },
  { image: genai, title: 'outskill - Generative AI Mindset' },
  { image: upgrad, title: 'upGrad - FSD Bootcamp Completion Certificate' },
  {
    image: hackethon,
    title: 'Hackathon - Web Development Winning Certificate',
  },
];
