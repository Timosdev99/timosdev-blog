import "./App.css";
import gif from "./gif/Q1Ns.gif";
import gif3 from "./gif/3BBS.gif"
import React from "react";
import Projects from "./project";
import Learning from "./todo";
import Knowlegde from "./random-knowlegde";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <img src={gif} alt="My gif" />
      <h1>Hey, Timosdev Here</h1>
      <p>
       <span className="intro"> I love coding, physics and math
        <br />
        As a backend developer, my world revolves around the intricate dance of
        data and logic that powers the digital experiences we interact with
        daily. But my passion for technology doesn't stop at writing efficient
        code or optimizing database queries. I'm on a quest to understand the
        very fabric of computation itself.
        <br />
        <br />
        <hr />
        <br />
        My love for coding is deeply intertwined with my fascination for physics
        and mathematics. These disciplines form the foundation of computer
        science, and I find myself constantly amazed by how abstract
        mathematical concepts translate into the software we use every day.</span>
        <ul>
          <ul>
            <li>
              <b> take a look at </b>
            </li>
            <ul>
              <li>
                <Link to="/projects">my projects... &gt;</Link>
              </li>
              <br />
              <li>
                <Link to="/Knowlegde">random knowledge... &gt;</Link>
              </li>
              <br />
              <li>
                <Link to="/learning">To-do / Learning... &gt;</Link>
              </li>
            <br/>
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
        <br/>
        < img className="gif3" src={gif3} alt="My gif" />
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/Knowlegde" element={<Knowlegde />} />
      </Routes>
    </Router>
  );
}

export default App;