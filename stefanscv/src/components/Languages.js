import ProgressBar from 'react-bootstrap/ProgressBar';
import Heading from './Heading';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Languages() {
  return (
    <div style={{ marginBottom: '25px' }}>
      <Heading label="Languages" />

      <Container>
        <Row>
          <Col md={4}>
            <p align="left">Slovak</p>
          </Col>
          <Col>
            <ProgressBar now={100} label={`100%`} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p align="left">English</p>
          </Col>
          <Col>
            <ProgressBar now={85} label={`85%`} />
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <p align="left">German</p>
          </Col>
          <Col>
            <ProgressBar now={60} label={`60%`} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
