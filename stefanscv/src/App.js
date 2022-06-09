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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              {' '}
              <Image src={photo} roundedCircle />
              <Contact />
              <Languages />
            </Col>
            <Col>
              <WorkExperience />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
