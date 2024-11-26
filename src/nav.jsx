import React from 'react'
import Resume from '../src/Resume.pdf'
import './App.css';

const nav = () => {
  return (
    <>


<nav className="navbar fixed-top navbar-expand-lg container px-5 ">
  
  <a className="navbar-brand" href="#">Portfolio</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">Home</a>
      <a className="nav-item nav-link" href="#skills">Skills</a>
      <a className="nav-item nav-link" href="#projects">Projects</a>
      <a className="nav-item nav-link" href={Resume} download="Resume">Download CV</a>
    </div>
    </div>
</nav>
    </>
  )
}

export default nav
