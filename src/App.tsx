import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import "./App.scss";

import myPic from "./assets/images/profile.jpg";

import About from "./pages/About/About";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/Skills/Skills";
import Project from "./pages/Project/Projects";
import Contact from "./pages/Contact/Contact";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <div className="overlay">
        <header>
          <nav className="container">
            <a href="/">
              <h3
                className="logo"
                dangerouslySetInnerHTML={{ __html: "{NELLY}" }}
              ></h3>
            </a>
          </nav>
        </header>

        <div className="container">
          <div className="grid flex">
            {/* Greetings */}
            <div className="hello" data-aos="zoom-in">
              <img src={myPic} alt="profile" />
              <div className="details">
                <p className="greeting">Hi 👋, I am</p>
                {/* <p className="greeting">Hi, I am</p> */}
                <h2 className="name">Nelly Ezeanya</h2>
                <div>
                  <span className="title">Frontend Developer</span>
                </div>
              </div>
            </div>

            {/* Main */}
            <div className="main-section" data-aos="fade-up">
              <Router>
                <nav>
                  <ul className="navLinks">
                    <li>
                      <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                      >
                        About
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/experience">Experience</NavLink>
                    </li>
                    <li>
                      <NavLink to="/skills">Skills</NavLink>
                    </li>
                    <li>
                      <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                  </ul>
                </nav>

                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Project />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Router>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
