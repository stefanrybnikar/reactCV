
import Image from 'react-bootstrap/Image';
import heart from '../pictures/heart.svg';

export default function Footer() {


  return (
    <div style={{ marginBottom: '50px' }}>
        <p> Made with <Image src={heart} /> with react and bootstrap.</p>
        {/* pre download pdf
        <a href='/somefile.txt' download>Click to download</a>*/}
    </div>
  );
}


