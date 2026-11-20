// =============================================================================
//  Portfolio content — single source of truth.
//  Edit values in this file to refresh anything shown on the site.
//  Components import what they need from here, e.g.:
//      import { personal, projects } from '../data';
// =============================================================================

import resumeTailor from '../assets/resume-tailor.png';
import ragBrandQa from '../assets/rag-brand-qa.png';
import pdfQa from '../assets/pdf-qa.png';
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
  FaDatabase,
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
  SiLangchain,
  SiOpenai,
  SiHuggingface,
  SiStreamlit,
  SiFastapi,
} from 'react-icons/si';

// ---------------------------------------------------------------------------
//  Personal info
// ---------------------------------------------------------------------------
export const personal = {
  fullName: 'Rekha Suthar',
  shortName: 'RS',
  firstName: 'Rekha',
  email: 'rekha0suthar@gmail.com',

  heroHeading:
    'I build AI-powered products end to end — LLM apps, RAG pipelines, and the evals that prove they work.',
  typewriterRoles: [
    'AI Application Engineer',
    'Full-Stack with React & Node',
    'Building with Claude & RAG',
    'IIT Madras · Data Science',
  ],
  credentialLine: 'B.Sc. Data Science & Applications · IIT Madras',

  resumeUrl: '/Rekha-Suthar-Resume.pdf',

  socials: {
    linkedin: 'https://www.linkedin.com/in/rekha0suthar/',
    github: 'https://github.com/rekha0suthar/',
  },
};

// ---------------------------------------------------------------------------
//  Navbar links
// ---------------------------------------------------------------------------
export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

// ---------------------------------------------------------------------------
//  About
// ---------------------------------------------------------------------------
export const about = {
  greeting: "Hi, I'm Rekha Suthar!",
  intro:
    'Full-stack engineer with a B.Sc. in Data Science & Applications from IIT Madras, building AI-powered products end to end — LLM apps, RAG pipelines, and the evals that prove they work. Production experience shipping React apps with Node/Express backends; comfortable owning features from spec to deployment. Open-source contributor to LiteLLM, Haystack, and Continue.',

  journey: [
    {
      title: 'My Journey',
      body: 'B.Sc. Data Science & Applications from IIT Madras: strong fundamentals in data, statistics, and programming, applied today through full-stack delivery and AI application work.',
    },
    {
      title: 'Technical Expertise',
      body: 'Production experience with React, Redux, REST APIs, and the MERN stack; comfortable owning features end to end—from UI polish to API integration and performance tuning.',
    },
    {
      title: 'AI Application Development',
      body: 'Shipping LLM-powered products: streaming generation UIs, retrieval-augmented Q&A with embeddings and vector search, and eval suites that gate CI. Contributing to open-source AI tooling — LiteLLM, Haystack, and Continue.',
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
//  Writing
// ---------------------------------------------------------------------------
export const writings = [
  {
    title: 'Building AI Resume Tailor — v0 build notes',
    summary:
      'Shipping the first AI feature on my portfolio: paste resume + JD, get tailored bullets, keyword gaps, and likely interview questions. Why I picked Groq over Claude, the prompt that does the work, and the JSON-shape bug I almost shipped.',
    date: '2026-05-15',
    tags: ['AI', 'Groq', 'Llama 3.3', 'React', 'Vercel'],
    link: 'https://dev.to/rekha0suthar/building-ai-resume-tailor-v0-build-notes-58f9',
  },
  {
    title: 'Role-based access in a MERN e-commerce app',
    summary:
      'How I structured permissions for customers, admins, and store managers in Grocery Store — JWT, Express middleware, React guards, and the bug that taught me to never trust the client.',
    date: '2026-05-12',
    tags: ['MERN', 'JWT', 'Auth', 'Build notes'],
    link: 'https://dev.to/rekha0suthar/role-based-access-in-a-mern-e-commerce-app-p0e',
  },
];

// ---------------------------------------------------------------------------
//  Education
// ---------------------------------------------------------------------------
export const education = [
  {
    degree: 'Bachelor of Science in Data Science & Applications',
    institution: 'Indian Institute of Technology, Madras',
    period: 'Jan 2021 – Apr 2025',
    logo: 'https://engageindia.ca/wp-content/uploads/2017/01/IITM-500x500.png',
    tagline:
      'Coursework breadth across programming, statistics, and data — informs how I design interfaces on top of real-world data flows.',
  },
];

// ---------------------------------------------------------------------------
//  Work experience
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
    technologies: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS', 'Material-UI'],
  },
];

// ---------------------------------------------------------------------------
//  Projects
// ---------------------------------------------------------------------------
export const projects = [
  {
    projectName: 'AI Resume Tailor',
    projectImage: resumeTailor,
    projectRepoLink: 'https://github.com/rekha0suthar/ai-resume-tailor',
    projectDemoLink: 'https://ai-resume-tailor-ruby.vercel.app',
    projectSummary:
      'LLM app that rewrites a resume against a job description: streamed output over SSE, component-based match scoring, chat refinement, PDF export. 170+ tests, CI-gated deploys.',
    techStack: ['React', 'Vercel Functions', 'Groq'],
  },
  {
    projectName: 'RAG Brand Q&A Assistant',
    projectImage: ragBrandQa,
    projectRepoLink: 'https://github.com/rekha0suthar/rag-brand-Q-A-assistant',
    projectDemoLink:
      'https://rag-brand-q-a-assistant-kewjcwl4ezwdteptjda5ny.streamlit.app',
    projectSummary:
      'Document-grounded assistant with a calibrated refusal gate and evidence-only citations. Retrieval quality measured in CI: hit@3 0.94, MRR 0.95. 85 tests.',
    techStack: ['LangChain', 'FAISS', 'Streamlit'],
  },
  {
    projectName: 'PDF Question Answering',
    projectImage: pdfQa,
    projectRepoLink: 'https://github.com/rekha0suthar/pdf-question-answer-ai',
    projectDemoLink: null,
    projectSummary:
      'Extractive QA over PDFs with DistilBERT: span answers with confidence scores.',
    techStack: ['FastAPI', 'React', 'Docker'],
  },
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
];

// ---------------------------------------------------------------------------
//  Skills
// ---------------------------------------------------------------------------
export const skills = [
  { name: 'LangChain', Icon: SiLangchain, color: '#4ade80' },
  { name: 'RAG / Vector Search', Icon: FaDatabase, color: '#8B5CF6' },
  { name: 'LLM APIs', Icon: SiOpenai, color: '#74aa9c' },
  { name: 'Hugging Face', Icon: SiHuggingface, color: '#FFD21E' },
  { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  { name: 'Streamlit', Icon: SiStreamlit, color: '#FF4B4B' },
  { name: 'Python', Icon: FaPython, color: '#FFD43B' },
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
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
];

// ---------------------------------------------------------------------------
//  Certificates
// ---------------------------------------------------------------------------
export const certificates = [
  { image: sql, title: 'HackerRank - SQL (Advanced) Certificate' },
  { image: genai, title: 'outskill - Generative AI Mindset' },
  { image: upgrad, title: 'upGrad - FSD Bootcamp Completion Certificate' },
  {
    image: hackethon,
    title: 'Hackathon - Web Development Winning Certificate',
  },
];
