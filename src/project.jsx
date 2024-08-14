import "./App.css";
import gif from "./gif/Q1Ns.gif";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="App">
      <img src={gif} alt="My gif" />
      <h1>Hey, Timosdev Here</h1>
      <p>
        <ul>
          <ul>
            <li className="projects">
              <b className="projects"> PROJECTS :)</b>
            </li>
            <br/>
            <ul>
              <li>
                <a  className="projects1" href="https://github.com/Timosdev99/health-compliance-API">Project 1: (A safety health and compliance api)</a>
              </li>
              <br />
              <li>
                <a  className="projects2" href="https://github.com/Timosdev99/blog-api-s-">Project 2: (an api for writing blogs)</a>
              </li>
              <br />
            </ul>
            <li>
              <b> my links </b>
            </li>
            <ul>
              <br />
              <li>
                <a href="https://github.com/Timosdev99">github</a>
              </li>
              <br />
              <li>
                <a href="https://x.com/Timothy9199">X-twitter</a>
              </li>
              <br/>
              <li>
                <Link to="/">Back to Home</Link>
              </li>
            </ul>
          </ul>
        </ul>
      </p>
    </div>
  );
}

export default Projects;