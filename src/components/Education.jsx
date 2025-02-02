import React from 'react';

const projects = [
  {
    projectName: 'Modern Web Development',
    projectTitle: 'Grocery shopping',
    link: 'https://github.com/rekha0suthar/grocery-web-application',
    projectDesc: [
      'Designed a full-stack grocery store application with role-based (Admin, Store manager and User) access control and managerial functionalities.',
      'Admin can perform CRUD on categories and products and accept/reject manager’s login and category related requests. Even add products to cart and buy it.',
      'Store Managers can download Expenditure reports and Users will receive reminders and monthly reports in heir mail. Also can perform CRUD on products and send CRUD requests for categories to admin.',
      'Users can search products by category or product name and make purchases.',
      'Technologies: React.js, Redux, Node Express, MongoDB, JSON TOKEN Authentication.',
    ],
  },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <h1>Education</h1>
      <hr />
      <div className="education-details">
        <h2>BSc in Data Science and Programming</h2>
        <p>India Institute of Technology, Madras</p>
        <div className="education-projects">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div>
                  {project.projectName} - {project.projectTitle}
                </div>
                <br />
                <a href={project.link}>Code</a>
                <ul key={project.projectTitle}>
                  {project.projectDesc.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
