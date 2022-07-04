import React from 'react';
import './App.scss';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import WordCloud from './components/Skills/wordcloud';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <WordCloud />
      <Contact />
    </Layout>
  );
}

export default App;
