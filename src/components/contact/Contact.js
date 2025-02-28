import React, { useEffect, useState } from 'react';
import './Contact.css'
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.sheetapi.rest/api/v1/sheet/F0uYB0ZZoHpIh87enfw_M", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        // Clear input fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        alert("Your message has been sent!");
      } else {
        alert("There was an issue sending your message. Please try again.");
      }})
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id='contact' className="contact-container">
      <div className="contact">
          <div className="contact-left" data-aos="fade-right">
            <h1 style={{fontSize:'45px', marginBottom:'50px'}}>Contact Me</h1>
            <p><span><SendIcon style={{color:'#ff004f', marginRight: '10px'}}/></span><a href="mailto:samuelponraj14@gmail.com">samuelponraj14@gmail.com</a></p>
            <p><span><PhoneIcon style={{color:'#ff004f', marginRight: '10px'}}/></span>+91 9941615894</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/samuel-ponraj-80a97131b" target="_blank" rel="noopener noreferrer"  className='linkedin'><LinkedInIcon /></a>
              <a href="https://github.com/samuel-ponraj" target="_blank" rel="noopener noreferrer" className='github'><GitHubIcon /></a>
              <a href="https://www.facebook.com/samuel.ponraj.3/" target="_blank" rel="noopener noreferrer" className='facebook'><FacebookIcon /></a>
              <a href="https://www.instagram.com/samuel_ponraj/" target="_blank" rel="noopener noreferrer" className='insta'><InstagramIcon /></a>
              
            </div>
            <a href="https://drive.google.com/file/d/1w9-LcQYhd3C4szo5lwiNPv4tx7RPj_pm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='btn'>Download Resume</a>
          </div>
          <div className="contact-right" data-aos="fade-left">
            <form onSubmit={handleFormSubmit}>
              <input type="text" name='name' placeholder='Your Name' value={formData.name}
								onChange={handleFormChange} required/>
              <input type="email" name='email' placeholder='Your Email' value={formData.email}
								onChange={handleFormChange} required/>
              <textarea name="message" rows="6" placeholder='Your Message' value={formData.message}
                style={{
                  resize: "vertical"
                }}
								onChange={handleFormChange}></textarea>
              <button type='submit' className='btn btn2' >Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact