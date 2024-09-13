import React from 'react'
import './About.css'
import sam from '../../assets/aboutpic.jpg'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import html5 from '../../assets/logos/html5.png'
import css from '../../assets/logos/css.png'
import js from '../../assets/logos/js.png'
import react from '../../assets/logos/react.png'
import java from '../../assets/logos/java.png'
import springboot from '../../assets/logos/springboot.png'
import mysql from '../../assets/logos/mysql.png'
import postgre from '../../assets/logos/postgre.png'
import oracle from '../../assets/logos/oracle.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LaunchIcon from '@mui/icons-material/Launch';

const About = () => {

 
  return (
<div  id='about' className="about-container">
    <div  className="about">
        <div className="about-left">
          <img src={sam} alt="" />
        </div>
        <div className="about-right">
          <h1 style={{fontSize:'45px', marginBottom:'20px'}}>About Me</h1>
          <p>I am a skilled frontend developer with expertise in React and a strong foundation in Java full-stack development. My enthusiasm for coding drives me to constantly learn and adapt to new technologies. I take pride in delivering efficient, user-friendly solutions that meet the needs of both clients and users. My quick learning ability allows me to stay updated with the latest trends and tools, ensuring that my work is always at the cutting edge of the industry.</p>
          <Tabs position='relative' variant='unstyled' className='tabs'>
            <TabList className='tablist'>
              <Tab className='tab'>Skills</Tab>
              <Tab className='tab'>Experience</Tab>
              <Tab className='tab'>Certifications</Tab>
              <Tab className='tab'>Education</Tab>
            </TabList>
            <TabIndicator mt='-2px' height='2px' width='50px !important' bg='red' borderRadius='1px'/>
            <TabPanels className='tabpanels'>
            <TabPanel className='tabpanel1'>
                <div className='skills'>
                  <div className='skills1'>
                    <ul>
                      <li><span className='logo'><img src={html5} alt="" /></span>HTML5</li>
                      <li><span className='logo'><img src={css} alt="" /></span>CSS3</li>
                      <li><span className='logo'><img src={js} alt="" /></span>JavaScript</li>
                      <li><span className='logo'><img src={react} alt="" /></span>React Js</li>
                    </ul>
                  </div>
                  <div className='skills1'>
                    <ul>
                      <li><span className='logo'><img src={java} alt="" /></span>Java</li>
                      <li><span className='logo'><img src={springboot} alt="" /></span>SpringBoot</li>
                    </ul>
                  </div>
                  <div className='skills1'>
                    <ul>
                      <li><span className='logo'><img src={mysql} alt="" /></span>MySQL</li>
                      <li><span className='logo'><img src={postgre} alt="" /></span>PostgreSQL</li>
                      <li><span className='logo'><img src={oracle} alt="" /></span>Oracle</li>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              <TabPanel className='tabpanel2'>
                <h3 style={{marginBottom:'5px', color:'#ff6699'}}>2018 - Present</h3>
                <p>Senior Executive at Straive</p>
                <br />
                <h3 style={{marginBottom:'5px', color:'#ff6699'}}>2017 - 2018</h3>
                <p>Trainee Executive at Thomson Digital</p>
              </TabPanel>
              <TabPanel className='tabpanel3'>
                <ul>
                  <li><KeyboardArrowRightIcon style={{color:'#ff6699', marginRight:'5px'}}/>Full Stack with Java Training at Besant Technologies <a href="https://drive.google.com/file/d/14eOZFRkY_NFQhGaJCQ2udzonO-aAy75-/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><LaunchIcon style={{marginLeft:'5px', fontSize:'15px'}}/></a></li>
                  <li><KeyboardArrowRightIcon style={{color:'#ff6699', marginRight:'5px'}}/>The Complete SQL Bootcamp <a href="https://drive.google.com/file/d/12x5DbEVQk9SrOoJM5xOCkKKvXX0l_f2Y/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><LaunchIcon style={{marginLeft:'5px', fontSize:'15px'}}/></a></li>
                  <li><KeyboardArrowRightIcon style={{color:'#ff6699', marginRight:'5px'}}/>SQL - MySQL for Data Analytics and Business Intelligence <a href="https://drive.google.com/file/d/1mOxiNAdKE-0oPm4fyIOmAwTTetIhH9ch/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><LaunchIcon style={{marginLeft:'5px', fontSize:'15px'}}/></a></li>
                  <li><KeyboardArrowRightIcon style={{color:'#ff6699', marginRight:'5px'}}/>Certificate for completion of Java training</li>
                  <li><KeyboardArrowRightIcon style={{color:'#ff6699', marginRight:'5px'}}/>Certificate of completion on “How to Perform Data Analytics using Python</li>
                  <li><KeyboardArrowRightIcon style={{color:'#ff6699', marginRight:'5px'}}/>International Robotics workshop of ROBO-ZEST4</li>
                </ul>
              </TabPanel>
              <TabPanel className='tabpanel4'>
                <h3 style={{marginBottom:'5px', color:'#ff6699'}}>2017</h3>
                <p>BE ECE at Kings Engineering College</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
    </div>
    </div>
  )
}

export default About