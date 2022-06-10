import Heading from './Heading';
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import travel from '../pictures/travel.png';
import bicycle from '../pictures/bicycle.png';
import hockey from '../pictures/hockey.png';

export default function Hobbies() {
  return (
    <div>
      <Heading label="Hobbies" />

      <Container>
        <Row>
          <Col>
            <Image src={travel} />
          </Col>
          <Col>
            <Image src={bicycle} />
          </Col>
          <Col>
            <Image src={hockey} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
