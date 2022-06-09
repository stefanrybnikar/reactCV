import React from "react";
import './App.css';

import photo from './photo.jpg';
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";

import WorkExperience from './components/WorkExperience.js';
import Contact from './components/Contact.js';
import Languages from './components/Languages.js';

function App() {
  return (
    <div className="App">


      <header className="App-header">

      <Image
        src={photo}
        roundedCircle
      />
      <WorkExperience />
      <Contact />
      <Languages />


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
