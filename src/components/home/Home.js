import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close';
import splogo from '../../assets/splogo.png';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';


const Home = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
        <div id='home' className="home">
          <div className="navbar">
                <a href="#home"><img src={splogo} alt="" className='logopic'/></a>
            <div className="menu-icon" onClick={toggleMenu}>
              <MenuIcon/>
            </div>
            <ul ref={navRef}  className={isOpen ? 'nav-links open' : 'nav-links'}>
              <div className="close-icon" onClick={toggleMenu}>
                <CloseIcon />
              </div>
              <li><a href="#home" onClick={() => {toggleMenu() ; setIsOpen (!isOpen)}}>Home</a></li>
              <li><a href="#about" onClick={() => {toggleMenu() ; setIsOpen (!isOpen)}}>About</a></li>
              <li><a href="#projects" onClick={() => {toggleMenu() ; setIsOpen (!isOpen)}}>Projects</a></li>
              <li><a href="#contact" onClick={() => {toggleMenu() ; setIsOpen (!isOpen)}}>Contact</a></li>
             
            </ul>
            
          </div>
          <div className="name-details" >
                <p>Hi,</p>
                <h1>I'm Samuel Ponraj</h1>
                <h3>
					<span></span>
                  {/* <ul className='role'>
				  	<li><span data-text="Developer">Developer</span></li>
					<li><span data-text="Web Developer">Web Developer</span></li>
					<li><span data-text="Front-End Developer">Front-End Developer</span></li>
                  </ul> */}
                </h3>
          </div>
        </div>
  )
}

export default Home