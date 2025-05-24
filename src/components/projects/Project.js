import React, { useEffect, useState } from 'react';
import './Project.css';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projects from '../../projects.js';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  const [showMoreMicroProjects, setShowMoreMicroProjects] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const showRemainingMicroProjects = () => {
    setShowMoreMicroProjects(true);
  };

  const liveProjects = projects.slice(0, 4);
  const microProjectsInitial = projects.slice(4, 7);
  const microProjectsRemaining = projects.slice(7); // remaining after show more

  return (
    <div id='projects' className="project-container">

      {/* Live Projects */}
      <div className="projects">
        <h1 style={{ fontSize: '45px', marginBottom: '50px' }}>My Projects</h1>
        <div className="project-list live-projects">
          {liveProjects.map((project) => (
            <div className="project live-project" key={project.id} data-aos="fade-up">
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

      {/* Micro Projects */}
      <div className="projects">
        <h1 style={{ fontSize: '45px', marginBottom: '50px', marginTop: '90px' }}>Mini Projects</h1>

        <div className="project-list">
          {microProjectsInitial.map((project) => (
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

        {/* Show More Projects */}
        {showMoreMicroProjects && (
          <div className="project-list">
            {microProjectsRemaining.map((project) => (
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
        )}

        {!showMoreMicroProjects && (
          <button onClick={showRemainingMicroProjects} className="btn btn2">Show more</button>
        )}
      </div>
    </div>
  );
};

export default Project;
