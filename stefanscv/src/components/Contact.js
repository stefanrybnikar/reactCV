import Heading from './Heading';

export default function Contact() {
  return (
    <div>
      <Heading label="Contact" />
      <p align="left">Bratislava, Slovakia</p>
      <p align="left">+421 904 129 420</p>
      <p align="left">stefanrybnikar@gmail.com</p>
      <a
        className="App-link"
        href="https://linkedin.com/in/stefanrybnikar"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linked in
      </a>
    </div>
  );
}
