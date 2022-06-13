import React from 'react';
import './App.css';

import photo from './photo.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import WorkExperience from './components/WorkExperience.js';
import Contact from './components/Contact.js';
import Languages from './components/Languages.js';
import Hobbies from './components/Hobbies.js';
import TechStack from './components/TechStack.js';
import Education from './components/Education.js';
import AboutMe from './components/AboutMe.js';
import MyWorkday from './components/MyWorkday.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col sm={5}>
              <Image src={photo} roundedCircle />
            </Col>
            <Col sm={7}>
              <AboutMe />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <Contact />
              <Languages />
              <MyWorkday />
              <Hobbies />
              <Education />
            </Col>
            <Col sm={7}>
              <WorkExperience />
            </Col>
          </Row>
          <TechStack />
        </Container>
      </header>
    </div>
  );
}

export default App;
