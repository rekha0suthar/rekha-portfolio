import React from 'react';
import { Link } from 'react-scroll';

const navList = [
  {
    title: 'Home',
    link: 'home',
  },
  {
    title: 'About',
    link: 'about',
  },
  {
    title: 'Experience',
    link: 'experience',
  },
  {
    title: 'Projects',
    link: 'projects',
  },
  {
    title: 'Skills',
    link: 'skills',
  },
  {
    title: 'Education',
    link: 'education',
  },
];

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        {navList.map((navItem) => {
          return (
            <Link
              to={navItem.link}
              spy={true}
              smooth={true}
              duration={2000}
              className="nav-item"
              activeClass="active"
              offset={-300}
            >
              {navItem.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
