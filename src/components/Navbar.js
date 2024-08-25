import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { MdMenu } from 'react-icons/md';

const navList = [
  { title: 'Home', link: 'home' },
  { title: 'About', link: 'about' },
  { title: 'Experience', link: 'experience' },
  { title: 'Projects', link: 'projects' },
  { title: 'Skills', link: 'skills' },
  { title: 'Education', link: 'education' },
  { title: 'Contact', link: 'contact' },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 900);

  // Update state based on window width
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 900);
    if (window.innerWidth >= 900) {
      setShow(false); // Hide the menu if resizing to a larger screen
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      {!isDesktop && (
        <div className="bar">
          <h2>Rekha's Portfolio</h2>
          <div className="nav-menu" onClick={() => setShow(!show)}>
            <MdMenu />
          </div>
        </div>
      )}
      {(isDesktop || show) && (
        <div className={`nav-items ${isDesktop ? '' : 'toggle-menu'}`}>
          {navList.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.link}
              spy={true}
              smooth={true}
              duration={2000}
              className="nav-item"
              activeClass="active"
              offset={-300}
              onClick={() => !isDesktop && setShow(false)} // Close menu on click if in mobile view
            >
              {navItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
