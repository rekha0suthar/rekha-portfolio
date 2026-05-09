import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personal } from '../data';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: personal.socials.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub />,
      url: personal.socials.github,
      label: 'GitHub',
    },
    {
      icon: <FaEnvelope />,
      url: `mailto:${personal.email}`,
      label: 'Email',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} {personal.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
