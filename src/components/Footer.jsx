import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/rekha0suthar/',
      label: 'LinkedIn',
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/rekha0suthar/',
      label: 'GitHub',
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:rekhasuthar0suthar@gmail.com',
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
          © {new Date().getFullYear()} Rekha Suthar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
