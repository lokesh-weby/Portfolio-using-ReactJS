
import './App.css';
import Nav from './nav';
import SplitType from 'split-type';
import { useEffect } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import img1 from '../src/images/img-1.jpg'
import img2 from '../src/images/img-2.jpg'
import img3 from '../src/images/img-3.jpg'
import img4 from '../src/images/img-4.jpg'
import img5 from '../src/images/img-5.png'
import img6 from '../src/images/img-6.png'
import img7 from '../src/images/img-7.png'
import img8 from '../src/images/img-8.png'
import img9 from '../src/images/img-9.png'

function App() {

  useEffect(()=>{
    
  gsap.registerPlugin(ScrollTrigger);
  const text = new SplitType('#target', { types: 'words, chars' })

  gsap.from(".info",{
    scrollTrigger:{
      trigger:".info",
      start:"top 5%",
      scrub:true,
      pin:true

    }
  })
    gsap.from(text.chars, {
      scrollTrigger: {
        trigger: "#target",
        start: "top 40%",    
        scrub:2,
     
      },  
       opacity:0,
      scale:2,
      x:40,
      stagger: { amount: 10},
  });


},[])



  return (
  <>
  <Nav/>

<div className='container'>
    <div className='info'>
    <h1 className='text-center mb-5 hover '  >
      Hello, I am Lokesh <span className='text-danger'>Web Developer!</span> <i class="bi bi-mouse" id="mouse-i"></i>
      </h1>

     <p className='text-center' >
       <p id='target'>A self-learning aspirant, the ablity to survive in the IT field. I learned the following skills with my own interest worth more than <strong className='text-primary'>$100 dollars.</strong> Curious to learn new technology
      Loosing in Web Designing in College's It improves my designing skills. <strong className='text-warning'>This impacts in creating responsive designs</strong></p></p>
      </div>
  

 
  <div className='profile'>

  </div>
  <div id='skills'>
    <div className='row height'>
      <div className='col-12 col-md-12 skillDes'>
        <h1 className='text-danger'>My Skills</h1>
        <h2>The Below skills are learned from my own Interest..</h2>

      </div>
      <div className='col-12 skillset'>
        <div className='row'>
          <div className='col-12 col-md-6 skills'>
            <h1><i class="bi bi-terminal"/>Languages</h1>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          
          </div>
          <div className='col-12 col-md-6 skills'>
          <h1><i class="bi bi-tools"/>  Tools</h1>
            <ul>
              <li>Git & GitHub</li>
              <li>VScode</li>
              <li>NPM</li>
              <li>Intellij</li>
            </ul>
          </div>
          <div className='col-12 col-md-6 skills'> 
         
          <h1><i class="bi bi-bootstrap"></i>FrameWorks & libraries</h1>
            <ul>
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>BootStrap</li>
              <li>GSAP</li>
            </ul>
            </div>
       
          <div className='col-12 col-md-6 skills'>
          <h1> <i class="bi bi-gear"></i>DataBases & others</h1>
            <ul>
              <li>MySQL</li>
              <li>SQL</li>
              <li>Responsive Design</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
     </div>
      </div>
    </div>
  </div>
  <div id='projects'>
    <h1 className='text-danger'>My Works</h1>
    <div className='wrapper'>
    <div className='img'>
      <img src={img1}/>
      <div className='content'>
      <h3>Testimonial grid Layout</h3>
      <p>Developed a company's Landign page usign <strong>HTML,CSS,Bootstrap,JavaScript</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary'href='https://github.com/lokesh-weby/testimonials-grid-section-main' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger'href='https://testimonials-grid-section-main-ashen-two.vercel.app/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>

  <div className='img'>
      <img src={img6}/>
      <div className='content'>
      <h3>Weather app</h3>
      <p>Developed a company's Landign page usign <strong>HTML,Bootstrap,Reactjs,Axios</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary' href='https://github.com/lokesh-weby/climate-app-axios' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger' href='https://climate-app-axios.vercel.app/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>


  <div className='img'>
      <img src={img4}/>
      <div className='content'>
      <h3>Multi Page Register Form</h3>
      <p>Developed a company's Landign page usign <strong>HTML,Bootstrap,JavaScript,Reactjs</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary'  href='https://github.com/lokesh-weby/multi-form-using-react' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger' href='https://multi-form-using-react.vercel.app/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>

  <div className='img'>
      <img src={img8}/>
      <div className='content'>
      <h3>Gyro Caluculator</h3>
      <p>Developed a company's Landign page usign <strong>HTML,Bootstrap,Reactjs,Axios</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary' href='https://github.com/lokesh-weby/calculator' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger' href='https://calculator-omega-silk-59.vercel.app/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>

  <div className='img'>
      <img src={img7}/>
      <div className='content'>
      <h3>Portfolio</h3>
      <p>Developed a company's Landign page usign <strong>HTML,Bootstrap,Reactjs,GSAP</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>

  <div className='img'>
      <img src={img2}/>
      <div className='content'>
      <h3>News HomePage main </h3>
      <p>Developed a company's Landign page usign <strong>HTML,CSS,Bootstrap</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary' href='https://github.com/lokesh-weby/newsletter-signup' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger' href='https://news-landing-page-tuu2.vercel.app/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>

  <div className='img'>
      <img src={img9}/>
      <div className='content'>
      <h3>News Landing Page</h3>
      <p>Developed a company's Landign page usign <strong>HTML,Bootstrap,Reactjs,GSAP</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary' href='https://github.com/lokesh-weby/NewsLandingPage' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger' href='https://news-landing-page-phi.vercel.app/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div> 
    </div>
  </div>

  <div className='img'>
      <img src={img3}/>
      <div className='content'>
      <h3>Sunside landing page</h3>
      <p>Developed a company's Landign page usign <strong>HTML,Bootstrap,CSS,JavaScript</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary' href='https://github.com/lokesh-weby/sunnyside-agency' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger' href='https://sunnyside-agency-topaz-ten.vercel.app/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>

  <div className='img'>
      <img src={img5}/>
      <div className='content'>
      <h3>Netflex clone</h3>
      <p>Developed a company's Landign page usign <strong>HTML,CSS,JavaScript</strong> </p>
      <p>Ensure Responsive design and cross-browser Compatibility</p>
      <div className='button'>
      <a className='btn btn-primary' href='https://github.com/lokesh-weby/netflix' target='_blank'><i class="bi bi-code-slash"></i>Source Code</a>
      <a className='btn btn-danger' href='https://lokesh-weby.github.io/netflix/' target='_blank'><i class="bi bi-link-45deg"></i>Go Live</a>
    </div>
    </div>
  </div>


  </div>
    
   

  </div>


  </div>

  </>
  );
}

export default App;
