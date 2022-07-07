import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const aboutArray = 'About Me'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters letterClass={letterClass} strArray={aboutArray} idx={15} />
          </h1>
          <p>
            I am a person with an active approach to life, very flexible, communicative, quick
            learner and team player.
          </p>
          <p>
            Coding is not only my job, but my passion. I’m looking for new challenges in my life.
          </p>
          <p>
            I'm also a enthusiastic learner. I love to learn new coding languages or frameworks.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
