import "./App.css";
import gif from "./gif/Q1Ns.gif";

function project() {
  return (
    <div className="App">
      <img src={gif} alt="My gif" />
      <h1>Hey, Timosdev Here</h1>
      <p>
        <ul> 

          <ul>
            <li>
              <b> take a look at </b>
            </li>
            <ul>
              <li>
                <a href= '#'>my projects... &gt;</a>
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
            </ul>
          </ul>
        </ul>
      </p>
    </div>
  );
}

export default project;
