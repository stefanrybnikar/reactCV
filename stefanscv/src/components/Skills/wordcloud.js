import React, { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true);

  const container = '.content';
  const texts = [
    'Java',
    'React',
    'Redux',
    'PHP',
    'React Native',
    'Android',
    'HTML5',
    'CSS3',
    'JS',
    'SpringBoot',
    'Java EE',
    'Vaadin',
    'FireBase',
    'SQL',
    'C++',
    'C',
    'IBM Cloud',
    'Maven',
    'Git',
    'Gradle',
  ];
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  };

  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options);
      setLoad(false);
    }
  });

  return (
    <div className="container tagcloud">
      <div className="text-zone">
        <div className="tagcloud-wrap">
          <div className="main">
            <span className="content"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCloud;
