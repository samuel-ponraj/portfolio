import React from 'react'
import './App.css'
import Home from './components/home/Home'
import About from './components/about/About'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
    <div className='background'></div>
    <div className='home-container'>
      <Home />
    </div>
    <div className='app-container'>
      <About />
      <Project />
      <Contact />
    </div>
    </>
  )
}

export default App