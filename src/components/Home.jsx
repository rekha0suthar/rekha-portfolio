import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  return (
    <div className="home-section" id="home">
      <div className="detail-section">
        <p className="header">
          Hi, I am <strong className="name">Rekha Suthar</strong>
        </p>
        <p className="title">Full Stack Developer</p>
        <p className="tagline">'''Code with Purpose, Build with Passion'''</p>
        <div className="socila-icon">
          <SocialIcon
            url="https://www.linkedin.com/in/rekha0suthar/"
            target="_blank"
          />{' '}
          <SocialIcon url="https://github.com/rekha0suthar/" target="_blank" />
          <a
            href="https://flowcv.com/resume/pm3fpn2i5w"
            target="_blank"
            rel="noreferrer"
            className="resume"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
