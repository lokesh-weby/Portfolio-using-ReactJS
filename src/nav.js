import React from 'react'
import Resume from '../src/Resume.pdf'
import './App.css';

const nav = () => {
  return (
    <>
         
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-5">
  <a className="navbar-brand" href="#"><h3>Portfolio</h3></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
    <li className="nav-item">
        <a className="nav-link" href={Resume} download="Loki's Resume">Resume</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#skills">Skills</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link" href="#education">Education</a>
      </li>
    </ul>
  </div>
</nav>

    </>
  )
}

export default nav
