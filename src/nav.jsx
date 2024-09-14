import React from 'react'
import Resume from '../src/Resume.pdf'
import './App.css';

const nav = () => {
  return (
    <>
         
  {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-5">
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
</nav> */}

<nav class="navbar bg-gray shadow-lg fixed-top navbar-light">
  <div class="container ">
    <a class="navbar-brand" href="#">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end bg-light" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
          <li class="nav-item">
          <a className="nav-link" href={Resume} download="Loki's Resume">Resume</a>
          </li>
          <li class="nav-item">
          <a className="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
          <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
          <a className="nav-link" href="#education">Education</a>
          </li>
          <li class="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>



    </>
  )
}

export default nav
