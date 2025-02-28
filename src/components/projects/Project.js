import React, { useEffect, useState } from 'react';
import './Project.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projects from '../../projects.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  const [showMoreMicroProjects, setShowMoreMicroProjects] = useState(false);

  const showRemainingMicroProjects = () => {
    setShowMoreMicroProjects(true);
  };

   useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);

  return (
    <div id='projects' className="project-container">
      {/* My Projects Section */}
      <div className="projects">
        <h1 style={{ fontSize: '45px', marginBottom: '50px' }}>My Projects</h1>
        <div className="project-list" >
          {/* Always show the first two projects */}
          {projects.slice(0, 3).map((project) => (
            <div className="project" key={project.id} data-aos="fade-up"> 
              <img src={project.img} alt={project.name} />
              <div className="layer">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="link-icon">
                    <OpenInNewIcon sx={{ color: '#ff004f' }} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Micro Projects Section */}
      <div className="projects">
        <h1 style={{ fontSize: '45px', marginBottom: '50px', marginTop:'90px' }}>Mini Projects</h1>
        <div className="project-list" >
          {/* Show the first three micro projects */}
          {projects.slice(3, 6).map((project) => (
            <div className="project" key={project.id} data-aos="fade-up"> 
              <img src={project.img} alt={project.name} />
              <div className="layer">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <div className="link-icon">
                    <OpenInNewIcon sx={{ color: '#ff004f' }} />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

       
        {showMoreMicroProjects && (
          <div className="project-list" data-aos="fade-up">
            {projects.slice(6).map((project) => (
              <div className="project" key={project.id}> 
                <img src={project.img} alt={project.name} />
                <div className="layer">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className="link-icon">
                      <OpenInNewIcon sx={{ color: '#ff004f' }} />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {!showMoreMicroProjects && (
          <button onClick={showRemainingMicroProjects} className="btn btn2">Show more</button>
        )}
      </div>
    </div>
  );
};

export default Project;
