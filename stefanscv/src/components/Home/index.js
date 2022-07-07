import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Container from 'react-bootstrap/Container';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ' Stefan'.split('');
  const jobArray = 'Full Stack Developer'.split('');
  const interestArray = ' & AI Enthusiast'.split('');
  const enthusiastArray = ''.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={interestArray} idx={22} />

            <br />
            <AnimatedLetters letterClass={letterClass} strArray={enthusiastArray} idx={22} />
          </h1>
          <h2>Java Developer / React Enthusiast</h2>

          <a href="/ICV2021.pdf" download className="flat-button">
            Download CV
          </a>
        </div>
      </div>

      <Loader type="pacman" />
    </Container>
  );
};

export default Home;
