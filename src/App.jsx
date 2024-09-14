
import './App.css';
import Nav from './nav.jsx';
import Footer from './footer.jsx'
import Project from './projects.jsx'
import SplitType from 'split-type';
import { useEffect } from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

function App() {

  useEffect(()=>{
    
  gsap.registerPlugin(ScrollTrigger);
  const text = new SplitType('#target', { types: 'words, chars' })

  gsap.from(".info",{
    scrollTrigger:{
      trigger:".info",
      start:"top 10%",
      scrub:true,
      pin:true,
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
  <div className='hello'>
  <div className='whatsapp'>
  <a href="https://wa.me/+919659210076" target='_blank'><i class="bi bi-whatsapp"></i></a>
  </div>
  </div>
    <div className='info'>
    <h1 className='text-center mb-5 hover '  >
      Hello, I am Lokesh <span className='text-danger'>Web Developer!</span> <i class="bi bi-mouse" id="mouse-i"></i>
      </h1>

     <p className='text-center' >
       <p id='target'>A self-learning aspirant, the ablity to survive in the IT field. I learned the following skills with my own interest worth more than <strong className='text-primary'>$100 dollars.</strong> Curious to learn new technology
      Loosing in Web Designing in College's It improves my designing skills. <strong className='text-white'>This impacts in creating responsive designs</strong></p></p>
      </div>
  
  <div id='skills'>
    <div className='row height'>
      <div className='col-12 col-md-12 skillDes'>
        <h1 className='text-danger'>My Skills</h1>
        <marquee scrollamount="10"><h2>The Below skills are learned from my own Interest..</h2></marquee>

      </div>
      <div className='col-12 skillset'>
        <div className='row'>
          <div className='col-12 col-md-6 skills'>
            <h1><i class="bi bi-terminal"/>Languages</h1>
            <ul>
              <li>Javascript</li>
              <li>Python</li>
              <li>HTML</li>
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
  <Project/>

  {/* <div id='education'>
    <h1 className='text-danger'>Education</h1>
    <div className='clg'>
 <h2><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
</svg> Muthurangam Govt. Arts and Science College</h2> 
<h3>Bsc Computer Science</h3>
 <h3 className='text-warning'>Thiruvallur university,</h3>
<h4>Vellore, TamilNadu [2021-2024]</h4>
<h4> GPA: '6. 9'</h4>
<h5>
<p> Relevant Coursework:</p></h5>
<h3> Software Engineering, Linux & Unix
 OS, ShellScript, DBMS, DS &
 Algorithm, PHP, Visual Basics,
 Multimedia Flash, Cloud
 computing, XML & Web-Services.</h3> 
 </div>
 <div className='school'>
  <h2><i class="bi bi-building"> </i>K.K.S Mani Matric Higher Secondary School</h2>
  <h4 className='text-warning'>Vellore, TamilNadu</h4>
  <h5>Stream: Bio-Maths</h5>
</div>
</div> */}
<div id="education">
<div class="container my-5">
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 className='ml-4'>Academy</h4>
      <ul class="timeline-3">
        <li>
          <h2>School</h2>
          <p href="#!" class="float-end">Vellore</p>
          <h4 class="mt-2">K.K.S Mani Matric Higher Secondary School</h4>
          <h6>Mark Obtained:85%</h6>
        </li>
        <li>
          <h2>UG</h2>
          <p href="#!" class="float-end">Oteri</p>
          <h4 class="mt-2">Muthurangam Govt. Arts and Science College</h4>
          <h3 className='text-danger'>Bsc Computer Science</h3>
          <h3 className='text-white'>Thiruvallur university</h3>
        </li>
        <li>
          <h2>PG</h2>
          <p href="#!" class="float-end">Vellore</p>
          <h4 class="mt-2">Ganathipaty technology of instution</h4>
          <h3 className='text-danger'>Masters in Computer Application</h3>
          <h3 className='text-white'>Anna university</h3>
        </li>
      
      </ul>
    </div>
  </div>
</div>
</div>
<Footer />
</div>

  </>
  );
}

export default App;
