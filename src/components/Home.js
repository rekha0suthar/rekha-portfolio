import React from 'react';
import photo from '../assets/photo.png';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  return (
    <div className="home-section" id="home">
      <div className="image-section">
        <img src={photo} alt="" />
      </div>
      <div className="detail-section">
        <p>
          Hello, Myself <strong className="name">Rekha Suthar</strong>, I am a{' '}
          <strong className="title">Software Developer</strong>
        </p>
        <div className="socila-icon">
           <SocialIcon
            url="https://www.linkedin.com/in/rekha0suthar/"
            target="_blank"
          />{' '}
          <SocialIcon url="https://github.com/rekha0suthar/" target="_blank" />
        </div>
      </div>
    </div>
  );
};

export default Home;
