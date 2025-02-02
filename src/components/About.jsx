import React from 'react';
import photo from '../assets/photo.png';

const About = () => {
  return (
    <div className="about-section" id="about">
      <div>
        <h1>About me</h1>
        <hr />

        <div className="about">
          <div className="about-details">
            <div className="image-section">
              <img src={photo} alt="" />
            </div>
            <span>
              <p>
                Passionate and adaptable, Software Developer with 2 years of
                experience in diverse domains such as Software Development and
                Team Management. I hold a Bachelor's degree in Data Science and
                Programming, which has provided me with a strong foundation in
                solving complex data challenges and creating impactful user
                experiences.
                <br />
                <br />
                My strengths include the ability to work efficiently under
                pressure, adaptability, and responsiveness.
              </p>

              <p>
                To maintain a balanced personal and professional life, I
                prioritize spending quality time with my family.
              </p>
            </span>
          </div>
          <div className="about-footer">
            <span className="first">
              <strong>Things I love to do: </strong>
              <ul>
                <li>
                  Learning new technologies and applying them to innovative
                  projects
                </li>
                <li>
                  Building creative and engaging applications using React and
                  CSS, focusing on both functionality and design.
                </li>
                <li>
                  Reading books and watching anime, which helps me unwind and
                  stay inspired
                </li>
              </ul>
            </span>
            <span className="second">
              <strong>Things I am good at: </strong>
              <ul>
                <li>Communication</li>
                <li>Web Development</li>
                <li>Interpersonal skills</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
