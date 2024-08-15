import React from 'react';

// experience data list
const experiences = [
  {
    companyName: 'Clutterbot',
    title: 'Data Platform Manager',
    workingPeriod: 'FEB 2022 - NOV 2022',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9134w2feR4zJJ4_23uJYxNF7m3DWWYG1JA&s',
    summary: [
      'Hiring and managing a productive 15-member team for image segmentation and object detection increased productivity by 30%.',
      'Utilizing and customizing the CVAT tool for COCO format annotations increased accuracy of tools by 10% and saved 15% of time',
      'Conducting daily meetings to ensure smooth communication, progress updates, and issue resolution.',
      'Implementing clear guidelines and quality checks to enhance model performance.',
    ],
  },
  {
    companyName: 'Learngram',
    title: 'Frontend Developer',
    workingPeriod: 'APR 2021 - JAN 2022',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/oikb5uteskk4bpflrgdi',
    summary: [
      'Developed and implemented smooth, responsive and interactive features using programming language JavaScript and Framework React and Redux for State Management.',
      "By utilizing a third-party library to add classes, I saved 5% of the development time compared to building it from scratch and increased the application's performance by 3%.",
      'Collaborative testing(Integration testing and System testing - Black box technique) of features of product with team and bugs and error fixing increased accuracy and performance of product by 15%.',
    ],
  },
  {
    companyName: 'Thinkreals',
    title: 'Frontend Developer Intern',
    workingPeriod: 'JAN 2021 - MAR 2021',
    logo: 'https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1494841318/ljxjdluf0nhvinmdcwoq.png',
    summary: [
      'I crafted engaging and responsive user interfaces, ensuring seamless functionality across devices.',
      'I implemented personalized information sections and dynamic testimonials using sliding card components and modals, which significantly enhanced the interactivity and visual appeal of the website',
    ],
  },
];

const Experience = () => {
  return (
    <div className="experience-section" id="experience">
      <h1>Experience</h1>
      <hr />

      <div className="experience-detail">
        {experiences.map((experience) => {
          return (
            <div className="detail-header">
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
