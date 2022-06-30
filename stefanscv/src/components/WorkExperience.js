import Employee from './Employee';
import Heading from './Heading';

export default function WorkExperience() {
  const color = '#0582ca';
  const text =
    'Work within a team through the full lifecycle software development from inception to delivery, through production operations, including coding, code reviews, testing and running the software in production. Create development tasks and assign tasks to developers. Provide guides and support to junior developers. Design and develop applications, coordinate with the rest of the team to deliver high quality software products. Collaborate with the business and technology stakeholders to drive changes, enhancing the customer experience. Responsible to move project to ibm cloud. Backend: JAVA8, SpringBoot';
  const text2 = "Full stack developer working basically on all aspects of Master data management project. Participating on creating solution architecture and technical analysis. Application is developed with framework EBX5 in JAVA 7 and Oracle database. Application modules were developed in JAVA 8 using SpringBoot, JDBC, Apache POI…";
  const text3 = "Java developer on the project for public sector. Mainly involved in web part, written with Vaadin framework and JAVA 6 EE. Front end used JavaScript, css, JQuery, Html5. I was also leader of group of two testers, responsible for development integration tests in Selenium WebDriver";
  const text4 = "Android developer responsible for full life cycle of various android applications for mobile and tablet devices. Client applications were created in native Android using JAVA. Server sides were build mainly with PHP using REST architecture";
//const tasks = ["Cart application ( 6.2022)", "Agreement tool ( 4.2022 -  6.2022 )"];
const tasks = [
  {
    name: 'Cart application',
    body: `Initiate and develop tool for updating and manipulating large carts for IBM orders.  (Java EE, Java 18, Postgre, React, Carbon design)`
  },
  {
    name: 'Agreement tool',
    body: `Whole project development. One time tool to migrate 1mil agreements between IBM and Kindril. (SpringBoot, Java 14, Postgre, React, Bootstrap)`
  },
  {
    name: 'Microservices',
    body: `Cooperate with microservice team on code refactor and performance improvement Java EE8, Java11, Postgre DB2, Docker`
  },
  {
    name: 'Education tool',
    body: `Team Leader responsible for the full lifecycle software development. Collaborate with the business to drive changes, enhancing the customer experience. JAVA8, SpringBoot, RabbitMQ, Docker, DB2, React, Redux, Ant design, moved to IBM Cloud`
  }
]

//{tasks.map(task => <li align="left">{task}</li> )}
  const ibm = () => {
    return (
      <div>
        <h2 align="left">SENIOR LEAD DEVELOPER</h2>
        <h3 align="left">IBM, Remote</h3>
        <h4 align="left">9.2020</h4>
        {tasks.map(task => <div><p align="left">{task.name} </p><p align="left">{ task.body}</p></div> )}
       {/* <ul>
        {tasks.map(task => <li align="left">{task.name} <p align="left">{task.body}</p></li> )}
    </ul>*/}
      </div>
    );
  }

  const line = () => {
    return (
      <hr style={{
        color: color,
        backgroundColor: color,
        height: 3,
      }}
    />
    );
  }

  return (
    <div>
      <Heading label="Work Experience" />
      {ibm()}
      {line()}
      <Employee position="SOLUTION DEVELOPER" name="Erste Group IT international, Vienna" dates="10.2016 - 9.2020" text={text2} />
      {line()}
      <Employee position="JAVA DEVELOPER" name="ATOS, Bratislava" dates="10.2015 - 10.2016" text={text3} />
      {line()}
      <Employee position="ANDROID DEVELOPER" name="Turn, Bratislava" dates="7.2014 - 1.2015" text={text4} />
    </div>
  );
}
