import React from 'react';

// experience data list
const experiences = [
  {
    companyName: 'Clutterbot',
    title: 'Full Stack Developer',
    workingPeriod: 'FEB 2023 - NOV 2023',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9134w2feR4zJJ4_23uJYxNF7m3DWWYG1JA&s',
    summary: [
      'Hiring and managing a productive 15-member team for image segmentation and object detection increased productivity by 30%.',
      'Utilizing and customizing the CVAT tool as per requirements using MERN stack annotations increased accuracy of tools by 10% and saved 15% of time.',
      'Implemented features to improve work speed and quality of the work to enhance model performance.',
      'Conducting daily meetings to ensure smooth communication, progress updates, and issue resolution.',
    ],
  },
  {
    companyName: 'Learngram',
    title: 'Frontend Developer',
    workingPeriod: 'APR 2022 - JAN 2023',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/oikb5uteskk4bpflrgdi',
    summary: [
      'Developed and implemented smooth, responsive and interactive features using programming language JavaScript and Framework React and Redux for State Management.',
      'Integrated a third-party library to streamline development, saving 5% of time and boosting application performance by 3%',
      'Collaborated on integration and system testing using black box techniques, improving product accuracy and performance by 15%',
    ],
  },
  {
    companyName: 'Thinkreals',
    title: 'Frontend Developer Intern',
    workingPeriod: 'JAN 2022 - MAR 2022',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1494841318/ljxjdluf0nhvinmdcwoq.png',
    summary: [
      'Designed engaging, responsive user interfaces to ensure seamless functionality across devices.',
      'Enhanced website interactivity and visual appeal by implementing personalized information sections and dynamic testimonials using sliding cards and modals.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <h1>Experience</h1>
      <hr />

      <div className="experience-detail">
        {experiences.map((experience, idx) => {
          return (
            <div className="detail-header" key={idx}>
              <span>
                <h2>{experience.title}</h2>
                <h4>{experience.companyName}</h4>
                <h3>{experience.workingPeriod}</h3>
              </span>
              <img src={experience.logo} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
