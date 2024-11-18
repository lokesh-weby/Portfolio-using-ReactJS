import React from 'react'
import './App.css'

const footer = () => {
  return (
    <>
    <footer>
        <div className='icons'>
       <a href='https://github.com/lokesh-weby' target='_blank'><i class="bi bi-github"></i></a> 
       <a href='https://www.instagram.com/lokesh_weby' target='_blank'><i class="bi bi-instagram"></i></a> 
       <a href='https://www.linkedin.com/in/lokesh-devlop' target='_blank'><i class="bi bi-linkedin"></i></a> 
       <a href='mailto:lokesh0212004@gmail.com' target='_blank'> <i class="bi bi-envelope"></i></a>
        </div>
        <div className='menu'>
        <h2><a  href="#">Home</a></h2>
        <h2><a href="#skills">Skills</a></h2>
        <h2><a href="#projects">Projects</a></h2>
        <h2><a href="#education">Education</a></h2>
        </div>
            </footer>
      
    </>
  )
}

export default footer
