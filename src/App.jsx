import "./App.css";
import Nav from "./nav.jsx";
import Footer from "./footer.jsx";
import Project from "./projects.jsx";
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const text = new SplitType("#target", { types: "words, chars" });

    gsap.from(".info", {
      scrollTrigger: {
        trigger: ".info",
        start: "top 10%",
        scrub: true,
        pin: true,
      },
    });
    gsap.from(text.words, {
      scrollTrigger: {
        trigger: "#target",
        start: "top 40%",
        scrub: 3,
      },
      translateX:100,
      scale:0,
      rotateX: 90,
      stagger: { amount: 2 },
    });
  }, []);

 
  // console.log(cursor);
  

  document.querySelector("body").addEventListener('mouseover', async (e) => {
    var cursor = document.querySelector('.cursor');

    console.log();
    
    
    var { clientX: x, clientY: y } = e;

    if(x>window.innerWidth/2){
      cursor.style.transform="scaleX(-1)";
    }else{
      cursor.style.transform="scaleX(1)"
    }

    cursor.style.left = `${x+50}px`;
    cursor.style.top = `${y+50}px`;
  });
  

  return (
    <>
      <div>
      <div class="cursor"></div>
        <Nav />
        <div className="hello">
          <div className="whatsapp">
            <a href="https://wa.me/+919659210076" target="_blank">
              <i class="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="info container">
          <h1 className="text-center mb-5">
            Hello, I am Lokesh{" "}
            <span className="text-danger">Web Developer!</span>{" "}
            <i class="bi bi-mouse" id="mouse-i"></i>
          </h1>

          <p className="text-center">
            <p id="target">
              A self-learning aspirant, the ablity to survive in the IT field. I
              learned the following skills with my own interest worth more than{" "}
              <strong className="text-primary">$100 dollars.</strong> Curious to
              learn new technology Loosing in Web Designing in College's It
              improves my designing skills.{" "}
              <strong className="text-white">
                This impacts in creating responsive designs
              </strong>
            </p>
          </p>
        </div>

        <div id="skills">
          <div className="row height">
            <div className="col-12 col-md-12 skillDes">
              <h1 className="text-danger">My Skills</h1>
              <marquee scrollamount="8">
                <h2>The Below skills are learned with my own Interest..</h2>
              </marquee>
            </div>
            <div className="col-12 skillset">
              <div className="row">
                <div className="col-12 col-md-6 skills">
                  <h1>
                    <i class="bi bi-terminal" />
                    Languages
                  </h1>
                  <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 skills">
                  <h1>
                    <i class="bi bi-tools" /> Tools
                  </h1>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>VScode</li>
                    <li>NPM</li>
                    <li>Intellij</li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 skills">
                  <h1>
                    <i class="bi bi-bootstrap"></i>FrameWorks & libraries
                  </h1>
                  <ul>
                    <li>Reactjs</li>
                    <li>Nodejs</li>
                    <li>BootStrap</li>
                    <li>GSAP</li>
                  </ul>
                </div>

                <div className="col-12 col-md-6 skills">
                  <h1>
                    {" "}
                    <i class="bi bi-gear"></i>DataBases & others
                  </h1>
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
        <Project />
        <div id="education">
          <div class="container my-5">
            <div class="row">
              <div class="col-md-6 offset-md-3">
                <h4 className="ml-4">Academy</h4>
                <ul class="timeline-3">
                  <li>
                    <h2>School</h2>
                    <p href="#!" class="float-end">
                      Vellore
                    </p>
                    <h4 class="mt-2">
                      K.K.S Mani Matric Higher Secondary School
                    </h4>
                    <h6 className="tech d-inline">Mark Obtained:85%</h6>
                  </li>
                  <li>
                    <h2>UG</h2>
                    <p href="#!" class="float-end">
                      Oteri
                    </p>
                    <h4 class="mt-2">
                      Muthurangam Govt. Arts and Science College
                    </h4>
                    <h3 className="text-danger">Bsc Computer Science</h3>
                    <h3 className="text-white">Thiruvallur university</h3>
                    <h6 className="tech d-inline">CGPA:70%</h6>
                  </li>
                  <li>
                    <h2>PG</h2>
                    <p href="#!" class="float-end">
                      Vellore
                    </p>
                    <h4 class="mt-2">Ganathipaty technology of instution</h4>
                    <h3 className="text-danger">
                      Masters in Computer Application
                    </h3>
                    <h3 className="text-white">Anna university</h3>
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
