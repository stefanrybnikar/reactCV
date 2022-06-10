import Employee from './Employee';
import Heading from './Heading';

export default function WorkExperience() {
  const text =
    'Work within a team through the full lifecycle software development from inception to delivery, through production operations, including coding, code reviews, testing and running the software in production. Create development tasks and assign tasks to developers. Provide guides and support to junior developers. Design and develop applications, coordinate with the rest of the team to deliver high quality software products. Collaborate with the business and technology stakeholders to drive changes, enhancing the customer experience. Responsible to move project to ibm cloud. Backend: JAVA8, SpringBoot';
  const text2 = "Full stack developer working basically on all aspects of Master data management project. Participating on creating solution architecture and technical analysis. Application is developed with framework EBX5 in JAVA 7 and Oracle database. Application modules were developed in JAVA 8 using SpringBoot, JDBC, Apache POI…";
  const text3 = "Java developer on the project for public sector. Mainly involved in web part, written with Vaadin framework and JAVA 6 EE. Front end used JavaScript, css, JQuery, Html5. I was also leader of group of two testers, responsible for development integration tests in Selenium WebDriver";
  const text4 = "Android developer responsible for full life cycle of various android applications for mobile and tablet devices. Client applications were created in native Android using JAVA. Server sides were build mainly with PHP using REST architecture";

  return (
    <div>
      <Heading label="Work Experience" />
      <Employee position="SENIOR LEAD DEVELOPER" name="IBM, Remote" dates="9.2020" text={text} />
      <Employee position="SOLUTION DEVELOPER" name="Erste Group IT international, Vienna" dates="10.2016 - 9.2020" text={text2} />
      <Employee position="JAVA DEVELOPER" name="ATOS, Bratislava" dates="10.2015 - 10.2016" text={text3} />
      <Employee position="ANDROID DEVELOPER" name="Turn, Bratislava" dates="7.2014 - 1.2015" text={text4} />
    </div>
  );
}
