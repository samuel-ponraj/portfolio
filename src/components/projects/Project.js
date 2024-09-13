import React, { useState } from 'react'
import './Project.css'
import image1 from '../../assets/projects/image_1.jpg'
import image2 from '../../assets/projects/image_2.jpg'
import image3 from '../../assets/projects/image_3.jpg'
import image4 from '../../assets/projects/image_4.jpg'
import image5 from '../../assets/projects/image_5.jpg'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Project = () => {

  const [showrow, setShowrow] = useState(false)

  const showSecondRow = () => {
    setShowrow(true)
  }

  return (
    <div id='projects' className="project-container">
      <div className="projects">
        <h1 style={{fontSize:'45px', marginBottom:'50px'}}>My Projects</h1>
        <div className="project-list">
        <div className="project">
          <img src={image1} alt="" />
          <div className="layer">
            <h3>Publisher Website</h3>
            <p>A responsive publisher website developed with React, offering a user-friendly interface for browsing publications, accessing detailed content, and purchasing books online seamlessly.</p>
            <a href="https://kingspublications.com/" target="_blank" rel="noopener noreferrer">
              <div className="link-icon"><OpenInNewIcon sx={{ color: '#ff004f' }} /></div>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={image2} alt="" />
          <div className="layer">
            <h3>User Profiles and Blog Posts</h3>
            <p>A dynamic user cards website developed with React, offering secure user authentication. Users can add posts, while admins have the ability to remove users and manage posts.</p>
            <a href="https://github.com/samuelponraj14/usercards" target="_blank" rel="noopener noreferrer">
              <div className="link-icon"><OpenInNewIcon sx={{ color: '#ff004f' }} /></div>
            </a>
          </div>
        </div>
        <div className="project">
          <img src={image3} alt="" />
          <div className="layer">
            <h3>E-Voting System</h3>
            <p>An efficient e-voting system using Java, Spring Boot and SQL, allowing users to securely cast their votes online. The application provides a seamless, accessible voting experience with robust backend support.</p>
            <a href="https://github.com/samuelponraj14/e-voting-system" target="_blank" rel="noopener noreferrer">
              <div className="link-icon"><OpenInNewIcon sx={{ color: '#ff004f' }} /></div>
            </a>
          </div>
        </div>
        {showrow && (
          <>
            <div className="project secondrow">
              <img src={image4} alt="" />
              <div className="layer">
                <h3>Weather App</h3>
                <p>A responsive weather app website using React and the OpenWeather API, delivering real-time weather updates and forecasts.</p>
                <a href="https://samuelponraj14.github.io/weather-app" target="_blank" rel="noopener noreferrer">
                  <div className="link-icon"><OpenInNewIcon sx={{ color: '#ff004f' }} /></div>
                </a>
              </div>
            </div>
            <div className="project secondrow">
              <img src={image5} alt="" />
              <div className="layer">
                <h3>Calculator</h3>
                <p>A calculator app using React, featuring an intuitive interface for performing basic calculations. The app ensures smooth and responsive user interactions for efficient operations.</p>
                <a href="https://samuelponraj14.github.io/calculator" target="_blank" rel="noopener noreferrer">
                  <div className="link-icon"><OpenInNewIcon sx={{ color: '#ff004f' }} /></div>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
      <button onClick={showSecondRow} className={showrow? 'hidebtn' : 'btn btn2'}>Show more</button>
      </div>
    </div>
  )
}

export default Project