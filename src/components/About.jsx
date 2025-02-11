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
              A passionate and versatile Full Stack Developer with 2 years of
              experience in web development and team management.
            </p>
          </div>
        </div>

        <div className="journey-container">
          <div className="journey-card">
            <div className="card-content">
              <h3>My Journey</h3>
              <p>
                I hold a Bachelor's degree in Data Science and Programming, and
                I specialize in solving complex data challenges while crafting
                impactful user experiences.
              </p>
            </div>
          </div>

          <div className="journey-card">
            <div className="card-content">
              <h3>Technical Expertise</h3>
              <p>
                Proficient in modern web technologies, with a strong focus on
                building creative and engaging applications using React and CSS.
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

          <div className="journey-card">
            <div className="card-content">
              <h3>Team Leadership</h3>
              <p>
                Experience in managing teams, fostering a collaborative
                environment, and driving projects to successful completion.
              </p>
            </div>
          </div>

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
