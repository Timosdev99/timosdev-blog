import "./App.css";
import gif from "./gif/Q1Ns.gif";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="App">
      <img src={gif} alt="My gif" />
      <h1>Hey, Timosdev Here</h1>
      <p className="para">
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
              <li>
                <a  className="projects2" href="https://github.com/Timosdev99/user-authentication-with-node-js">Project 3: (A user authentication api on javascript)</a>
              </li>
            </ul>

            <ul>
            
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