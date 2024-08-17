import "./App.css";
import gif from "./gif/Q1Ns.gif";
import { Link } from "react-router-dom";

function Knowlegde() {
  return (
    <div className="App">
      <img src={gif} alt="My gif" />
      <h1>Hey, Timosdev Here</h1>
      <p className="para">
        <ul>
          <ul>
            <li className="projects">
              <b className="projects"> Random knowlegde :)</b>
            </li>
            <br/>
            <ul>
              <li>
                <a  className="projects1"> 1: About to learn more on neural networks and i'm going to be using brain.js(updating soon) </a>
              </li>
              <br />
              <li>
                <a  className="projects2"> 2: </a>
              </li>
              <br />
              <li>
                <a  className="projects2"> 3:</a>
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

export default Knowlegde;