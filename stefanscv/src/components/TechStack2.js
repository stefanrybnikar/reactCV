import Heading from './Heading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TechStack() {
   /*  C++ PHP   
    */

  const firstRow = ['Java', 'JavaScript', 'Android'];
  const secondRow = ['SpringBoot', 'Java EE', 'EBX '];
  const thirdRow = ['React', 'Redux', 'React Native'];
  const fourthRow = ['Firestore', 'IBM Cloud', 'Docker'];
  const fifthRow = ['Vaadin', 'Maven', 'Gradle'];
  const sixthRow = ['DB2', 'Postgre', 'Oracle'];
  const seventhRow = ['Jenkins', 'Git', 'Svn'];
  const eighthRow = ['Confluence', 'Jira', 'Scrum'];

  return (
    <div style={{ marginBottom: '100px' }}>
      <Heading label="Tech Stack" />

      <Container>
        {createItems(firstRow)}
        {createItems(secondRow)}
        {createItems(thirdRow)}
        {createItems(fourthRow)}
        {createItems(fifthRow)}
        {createItems(sixthRow)}
        {createItems(seventhRow)}
        {createItems(eighthRow)}
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
