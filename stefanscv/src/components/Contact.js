import Heading from './Heading';
import Image from 'react-bootstrap/Image';

import mail from '../pictures/mail.svg';
import geo from '../pictures/geo-alt.svg';
import phone from '../pictures/telephone.svg';
import linkedin from '../pictures/linkedin.svg';

export default function Contact() {
  return (
    <div style={{ marginBottom: '25px' }}>
      <Heading label="Contact" />
      <p align="left">
        <Image src={geo} style={{ marginRight: '10px' }} />
        Bratislava, Slovakia
      </p>
      <p align="left">
        <Image src={phone} style={{ marginRight: '10px' }} />
        +421 904 129 420
      </p>
      <p align="left">
        <Image src={mail} style={{ marginRight: '10px' }} />
        stefanrybnikar@gmail.com
      </p>
      <p align="left">
        <Image src={linkedin} style={{ marginRight: '10px' }} />
        <a
          //className="App-link"
          href="https://linkedin.com/in/stefanrybnikar"
          target="_blank"
          //rel="noopener noreferrer"
        >
          Linked in
        </a>
      </p>
    </div>
  );
}
