import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socila-icon">
        <SocialIcon
          url="https://www.linkedin.com/in/rekha0suthar/"
          target="_blank"
        />{' '}
        <SocialIcon url="https://github.com/rekha0suthar/" target="_blank" />
      </div>
    </div>
  );
};

export default Footer;
