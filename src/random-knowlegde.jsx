import "./App.css";
import gif from "./gif/Q1Ns.gif";
import gif2 from "./gif/3BBS.gif"
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
                <a  className="projects1"> 1: learning low level programming type of shii </a>
              </li>
              <br />
              <li>
                <a  className="projects2"> 2: recently learned about distributed database management system <a href="https://github.com/Timosdev99/distributed-database-management-system">check it out</a> </a>
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
        <br/>
        < img className="gif2" src={gif2} alt="My gif" />
      </p>
    </div>
  );
}

export default Knowlegde;