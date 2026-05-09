import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { personal } from '../data';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-section" id="home">
      {/* Name and Introduction */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="detail-section"
      >
        <h1 style={{ color: 'white' }}>{personal.heroHeading}</h1>

        {/* Typewriter Effect for Title */}
        <p className="title">
          <Typewriter
            words={personal.typewriterRoles}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
          />
        </p>

        {/* Tagline with Animation */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="tagline "
        >
          <strong>{personal.fullName}</strong>
          <span className="home-credential">{personal.credentialLine}</span>
        </motion.p>

        {/* Social Icons with Hover Effect */}
        <div className="social-icon">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SocialIcon
              url={personal.socials.linkedin}
              target="_blank"
              fgColor="white"
              bgColor="transparent"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <SocialIcon
              url={personal.socials.github}
              target="_blank"
              fgColor="white"
              bgColor="transparent"
            />
          </motion.div>

          {/* Resume Button with Hover Glow */}
          <motion.a
            href={personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              boxShadow: '0px 0px 10px rgba(0, 153, 255, 0.7)',
            }}
            transition={{ duration: 0.3 }}
            className="resume"
          >
            Resume
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
