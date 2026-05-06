import React from 'react';
import photo from '../assets/photo.png';
import '../styles/About.css';

const About = () => {
  return (
    <div className="section-container" id="about">
      <h1 className="section-title">About me</h1>
      <div className="title-underline"></div>

      <div className="about-container">
        <div className="profile-card">
          <div className="profile-image">
            <img src={photo} alt="Rekha Suthar" />
          </div>
          <div className="profile-intro">
            <h2>Hi, I'm Rekha Suthar!</h2>
            <p>
              Frontend-focused full-stack engineer (React, Redux, MERN). I ship
              performant interfaces, reusable components, and pragmatic state
              management. IIT Madras (Data Science & Programming) grounding
              means I enjoy products where data quality, UX, and engineering meet
              — including thoughtful use of ML/AI features when they solve real
              user problems.
            </p>
          </div>
        </div>

        <div className="journey-container">
          <div className="journey-card">
            <div className="card-content">
              <h3>My Journey</h3>
              <p>
                B.Sc. Data Science & Programming from{' '}
                <strong>IIT Madras</strong>: strong fundamentals in data and
                programming, applied today through robust web interfaces and
                full-stack delivery.
              </p>
            </div>
          </div>

          <div className="journey-card">
            <div className="card-content">
              <h3>Technical Expertise</h3>
              <p>
                Production experience with React, Redux, REST APIs, and the MERN
                stack; comfortable owning features end to end—from UI polish to
                API integration and performance tuning.
              </p>
            </div>
          </div>

          <div className="journey-card">
            <div className="card-content">
              <h3>Problem Solving</h3>
              <p>
                Adept at navigating complex data issues and developing
                innovative solutions under pressure.
              </p>
            </div>
          </div>

          {/* <div className="journey-card">
            <div className="card-content">
              <h3>Team Leadership</h3>
              <p>
                Experience in managing teams, fostering a collaborative
                environment, and driving projects to successful completion.
              </p>
            </div>
          </div> */}

          <div className="journey-card">
            <div className="card-content">
              <h3>Passions & Interests</h3>
              <ul>
                <li>
                  Constantly exploring new technologies and applying them to
                  innovative projects.
                </li>
                <li>
                  Building applications that not only function flawlessly but
                  also provide an exceptional user experience.
                </li>
                <li>
                  While coding is my passion, I maintain balance through
                  reading, anime, and family time.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
