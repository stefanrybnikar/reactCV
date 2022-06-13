import Heading from './Heading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TechStack() {
  const firstRow = [
    'EBX',
    'Android',
    'WebLogic',
    'Oracle',
    'Vaadin',
    'Selenium',
    'CodeIgniter',
    'Cucumber',
  ];
  const secondRow = [
    'Arquillian',
    'WebSphere',
    'SQL',
    'PHP',
    'Maven',
    'Gradle',
    'WSDL',
    'C',
    'C++',
    'Confluence',
    'Jira',
  ];
  const thirdRow = [
    'Javascript',
    'React',
    'React_Native',
    'Redux',
    'Docker',
    'Jenkins',
    'Springboot',
    'Git',
    'SVN',
  ];
  return (
    <div style={{ marginBottom: '100px' }}>
      <Heading label="Tech Stack" />

      <Container>
        {createItems(firstRow)}
        {createItems(secondRow)}
        {createItems(thirdRow)}
      </Container>
    </div>
  );
}

const createItems = array => {
  let itemList = array.map(item => {
    return (
      <Col>
        <u>{item}</u>
      </Col>
    );
  });
  return <Row>{itemList}</Row>;
};
