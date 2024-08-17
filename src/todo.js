import "./App.css";
import gif from "./gif/Q1Ns.gif";
import { Link } from "react-router-dom";

function Learning() {
  return (
    <div className="App">
      <img src={gif} alt="My gif" />
      <h1>Hey, Timosdev Here</h1>
      <p className="para">
        <ul>
          <ul>
            <li className="projects">
              <b className="projects"> To-do / Learning :)</b>
            </li>
            <br/>
            <ul>
              <li>
                <a  className="projects1"> Currrently learning more on how computers work and also learning more math </a>
              </li>
              <br />
              <li>
                <a  className="projects2">learning linear reggression and more calculus</a>
              </li>
              <br />
              <li>
                <a  className="projects2">coding my way into ML</a>
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

export default Learning;