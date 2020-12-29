import './reset.css';
import './app.css';
import project1 from './imgs/Easybank-project.png';
import project2 from './imgs/react-saleswhale.png';
import project3 from './imgs/social-dashboard-sm2.png';
import project4 from './imgs/faq-accordion-card.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function App() {
  return (
    <div className="container">
      <div className="titles">
        <h1>Isaac Galvan</h1>
        <h1 className="accentColor">Frontend Developer</h1>
      </div>
      <div id="about-section">
        <h2>About Me</h2>
        <p>From the ﬁrst "Hello World" I coded, I knew I was hooked into the amazing world of programming. Software development is more than a job to me, it has offered me a great way to continually learn and improve my skills. What started with a simple "Hello World" has become a full-ﬂedged passion that only gets more exciting as time goes by.  </p>
        <a href="https://docs.google.com/document/d/1qql3RqjUkrPjJ-RWvTVawlUaWfb869-Kiryz2RZ6-u8/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="resume-btn">View Resume</button></a>
      </div>
      <div id="project-section">
        <h2>My Projects</h2>
        <div className="project-left">
          <div className="img-container">
            <a href="https://easybank-ig.netlify.app/" target="blank">
              <img src={project1} alt="Easybank Project"/>
            </a>
          </div>
          <div className="content">
            <p className="sub-title">Easybank Project</p>
            <p>This is a static website that I remade from a front end challenge. I used React, SASS, and GSAP. Here is the design</p>
            <div className="project-btns">
            <a href="https://easybank-ig.netlify.app/" target="blank"><button className="live-btn">View Live</button></a>
            <a href="https://github.com/isaacgalvan10/react-easybank" target="blank"><button className="code-btn">View Code</button></a>
          </div>
          </div>
        </div>
        <div className="project-right">
          <div className="img-container">
            <a href="https://react-saleswhale-isaacg.netlify.app/" target="blank">
              <img src={project2} alt="SalesWhale Project"/>
            </a>
          </div>
          <div className="content">
            <p className="sub-title">Saleswhale Website</p>
            <p>This is a static business website that I remade from a Figma Design. I used React, SASS, Bootstrap, and GSAP. Here is the figma design</p>
            <div className="project-btns">
            <a href="https://react-saleswhale-isaacg.netlify.app/" target="blank"><button className="live-btn">View Live</button></a>
            <a href="https://github.com/isaacgalvan10/React-Saleswhale" target="blank"><button className="code-btn">View Code</button></a>
          </div>
          </div>
        </div>
        <div className="project-left">
          <div className="img-container">
            <a href="https://ig-social-media-dashboard.netlify.app/" target="blank">
              <img src={project3} alt="Easybank Project"/>
            </a>
          </div>
          <div className="content">
            <p className="sub-title">Social Media Dashboard Project</p>
            <p>This is a frontend challenge from frontendmentor.io. I built this using Javascript, React, and SASS</p>
            <div className="project-btns">
            <a href="https://ig-social-media-dashboard.netlify.app/" target="blank"><button className="live-btn">View Live</button></a>
            <a href="https://github.com/isaacgalvan10/social-media-dashboard" target="blank"><button className="code-btn">View Code</button></a>
          </div>
          </div>
        </div>
        <div className="project-right">
          <div className="img-container">
            <a href="https://isaacgalvan10.github.io/faq-accordion-card.io/" target="blank">
              <img src={project4} alt="SalesWhale Project"/>
            </a>
          </div>
          <div className="content">
            <p className="sub-title">Saleswhale Website</p>
            <p>This is a static business website that I remade from a Figma Design. I used React, SASS, Bootstrap, and GSAP. Here is the figma design</p>
            <div className="project-btns">
            <a href="https://isaacgalvan10.github.io/faq-accordion-card.io/" target="blank"><button className="live-btn">View Live</button></a>
            <a href="https://github.com/isaacgalvan10/faq-accordion-card.io" target="blank"><button className="code-btn">View Code</button></a>
          </div>
          </div>
        </div>
      </div>
        <div id="contact-section">
          <h2>Contact Me</h2>
          <a href="mailto:galvan1522@gmail.com"><p className="email">galvan1522@gmail.com</p></a>
          <a href="tel:+2108846564"><p>(210)884-6564</p></a>
        </div>
        <footer>
        <a className="github" href="https://github.com/isaacgalvan10" target="blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a className="linkedin" href="https://www.linkedin.com/in/isaac-galvan-712095149/" target="blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <p>Designed and Developed By Isaac Galvan</p>
        </footer>
    </div>
  );
}

export default App;