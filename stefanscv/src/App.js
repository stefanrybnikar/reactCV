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
      <div class="center">
        <div class="wrap">
          <div class="table">
            <div class="row">
              <Home />
            </div>
            <div class="row">
              <About />
            </div>
            <div class="row">
              <Skills />
            </div>
            <div class="row">
              <WordCloud />
            </div>
            <div class="row">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
