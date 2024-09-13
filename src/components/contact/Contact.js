import React, { useState } from 'react'
import './Contact.css'
import SendIcon from '@mui/icons-material/Send';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

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

  const handleFormSubmit = () => {
    fetch("https://api.sheetapi.rest/api/v1/sheet/F0uYB0ZZoHpIh87enfw_M", {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		  });
  }

  return (
    <div id='contact' className="contact-container">
      <div className="contact">
          <div className="contact-left">
            <h1 style={{fontSize:'45px', marginBottom:'50px'}}>Contact Me</h1>
            <p><span><SendIcon style={{color:'#ff004f', marginRight: '10px'}}/></span><a href="mailto:samuelponraj14@gmail.com">samuelponraj14@gmail.com</a></p>
            <p><span><PhoneIcon style={{color:'#ff004f', marginRight: '10px'}}/></span>+91 9941615894</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/samuel-ponraj-80a97131b" target="_blank" rel="noopener noreferrer"  className='linkedin'><LinkedInIcon /></a>
              <a href="https://github.com/samuelponraj14" target="_blank" rel="noopener noreferrer" className='github'><GitHubIcon /></a>
              <a href="https://www.facebook.com/samuel.ponraj.3/" target="_blank" rel="noopener noreferrer" className='facebook'><FacebookIcon /></a>
              <a href="https://www.instagram.com/samuel_ponraj/" target="_blank" rel="noopener noreferrer" className='insta'><InstagramIcon /></a>
              
            </div>
            <a href="https://drive.google.com/file/d/1lFz8xnavZmuwvHZkyr60wB8bjxrQqa_Q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='btn'>Download Resume</a>
          </div>
          <div className="contact-right">
            <form >
              <input type="text" name='name' placeholder='Your Name' value={formData.name}
								onChange={handleFormChange} required/>
              <input type="email" name='email' placeholder='Your Email' value={formData.email}
								onChange={handleFormChange} required/>
              <textarea name="message" rows="6" placeholder='Your Message' value={formData.message}
								onChange={handleFormChange}></textarea>
              <button type='submit' className='btn btn2' onClick={handleFormSubmit}>Submit</button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Contact