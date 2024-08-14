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
            <li>
              <b> take a look at my projects</b>
            </li>
            <br/>
            <ul>
              <li>
                <a href="https://github.com/Timosdev99/health-compliance-API">Project 1</a>
              </li>
              <br />
              <li>
                <a href="#">random knowledge... &gt;</a>
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