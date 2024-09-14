import React from "react";
import img1 from "../src/images/img-1.jpg";
import img2 from "../src/images/img-2.jpg";
import img3 from "../src/images/img-3.jpg";
import img4 from "../src/images/img-4.jpg";
import img5 from "../src/images/img-5.png";
import img6 from "../src/images/img-6.png";
import img7 from "../src/images/img-07.png";
import img8 from "../src/images/img-8.png";
import img9 from "../src/images/img-9.png";

const projects = () => {
  return (
    <>
      <div id="projects">
        <h1 className="text-white">Project Gallery</h1>
        <h2 className="text-danger">{"Swipe>>"}</h2>

        <div className="scroller container shadow-lg">
          <div className="img">
            <img src={img1} />       
            <div className="content">
              <h3 >Testimonial grid Layout</h3>

              <ul>
                <li> <p>
                Developed a Testimonial using <i className="tech">HTML, CSS, Bootstrap, JavaScript</i>
              </p></li>
                <li><p>Through this project i have learn't grid layout</p></li>
              </ul>
             
              
              <div className="button">
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/testimonials-grid-section-main"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://testimonials-grid-section-main-ashen-two.vercel.app/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>
          <div className="img">
            <img src={img6} />
            <div className="content">
              <h3>Weather app</h3>
              <ul>
                <li> <p>
                Developed a Weather Application using <span className="tech">HTML, Bootstrap, Reactjs, Axios</span>
              </p></li>
                <li><p>Ensure Responsive design and cross-browser Compatibility</p></li>
              </ul>
              <div className="button">
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/climate-app-axios"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://climate-app-axios.vercel.app/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={img4} />
            <div className="content">
              <h3>Multi Page Register Form</h3>
              <ul>
                <li> <p>
                Developed a Multi Page Register form using
                <i className="tech"> HTML, Bootstrap, CSS, js</i>
              </p></li>
                <li><p>Ensure Responsive design and cross-browser Compatibility</p></li>
              </ul>
              <div className="button">
                
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/multi-form-using-react"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://multi-form-using-react.vercel.app/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={img8} />
            <div className="content">
              <h3>Gyro Caluculator</h3>
              <ul>
                <li> <p>
                Developed a Calculator using
                <i className="tech"> HTML, Bootstrap, glide js</i>
              </p></li>
                <li><p>Ensure Responsive design and cross-browser Compatibility</p></li>
              </ul>
              <div className="button">
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/calculator"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://calculator-omega-silk-59.vercel.app/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={img7} />
            <div className="content">
              <h3>Portfolio</h3>
              <ul>
                <li> <p>
                Developed a Portfolio using <i className="tech"> HTML, Bootstrap, Reactjs, CSS, GSAP</i>
              </p></li>
                <li><p>To understand the concepts of React compound</p></li>
              </ul>
              <div className="button">
                <a className="btn btn-primary">
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
            
                <a className="btn btn-danger">
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={img2} />
            <div className="content">
              <h3>News HomePage Main </h3>
              <ul>
                <li> <p>
                Developed a NewsHompage 
                <i className="tech"> HTML, CSS, JavaScript</i>
              </p></li>
                <li><p>Practicing some designs..</p></li>
              </ul>
              <div className="button">
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/newsletter-signup"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://news-landing-page-tuu2.vercel.app/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={img9} />
            <div className="content">
              <h3>News Landing Page</h3>
              <ul>
                <li> <p>
                Developed a landing page using<i className="tech"> HTML, Bootstrap, CSS</i>
              </p></li>
                <li><p>Through this project i have learn't grid layout</p></li>
              </ul>
              <div className="button">
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/NewsLandingPage"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://news-landing-page-phi.vercel.app/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={img3} />
            <div className="content">
              <h3>Sunside landing page</h3>
              <ul>
                <li> <p>
                Developed a landing page usign <i className="tech"> HTML, Bootstrap, CSS</i>
              </p></li>
                <li><p>Designed my pixel perfect design what the UI is there</p></li>
              </ul>
              
              <div className="button">
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/sunnyside-agency"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://sunnyside-agency-topaz-ten.vercel.app/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>

          <div className="img">
            <img src={img5} />
            <div className="content">
              <h3>Netflex clone</h3>
              <ul>
                <li> <p>
                Developed Netflex login replicate using<i className="tech"> HTML, CSS</i>
              </p></li>
                <li><p>This is my inital project when I was learned HTML CSS</p></li>
              </ul>
              <div className="button">
                <a
                  className="btn btn-primary"
                  href="https://github.com/lokesh-weby/netflix"
                  target="_blank"
                >
                  <i class="bi bi-code-slash"></i>Source Code
                </a>
                <a
                  className="btn btn-danger"
                  href="https://lokesh-weby.github.io/netflix/"
                  target="_blank"
                >
                  <i class="bi bi-link-45deg"></i>Go Live
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default projects;
