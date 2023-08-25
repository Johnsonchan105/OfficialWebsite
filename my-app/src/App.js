import React from 'react';
import './App.css';

function App() {
  return (
    <div class = 'App'>
      <div id='content'>
        <div id = 'intro'>
          <div id='intro_thing'></div>
          <div class = 'Title'>
            <h1>Hi! I'm Johnson.</h1>
          </div>
          <div className='fade-in-section is-visible'>
            <div class='intro-desc'>
              I'm a software engineer based in Campbell, CA, who loves crafting frontends, 
              exploring machine learning, enhancing the way people interact with technology, 
              and everything in between.
            </div>
          </div>
        </div>
        <div id = 'about'>
          <div class='fade-in-section is-visible'>
            <div class = 'section-header'>
              <span class='section-title'>About Me</span>
            </div>
            <div class = 'about-content'>
              <p>
                Hi! My name is Cheng Han, but I go by Johnson! I am currently undertaking a 
                Bachelor's of Sceince in Computer Science at the <b>University of California, Santa Barbara</b> and 
                will be completing the degree in June 2024. Current I am also taking an internship at <b> YSTEM and Chess</b> while 
                performing as an Undergraduate Learning Assistant at UCSB.
              </p>
              I have been working with these technologies!
              <ul class = 'tech-stack'>
                <div>
                  <li>Python</li>
                </div>
                <div>
                  <li>Javascript</li>
                </div>
                <div>
                  <li>HTML&CSS</li>
                </div>
                <div>
                  <li>Node.js</li>
                </div>
                <div>
                  <li>React.js</li>
                </div>
                <div>
                  <li>Angular.js</li>
                </div>
              </ul>
              <p>Outside of work you’ll probably find me rock climbing, playing video games (Riot Games ily &lt;3), or obsessing over my latest hyperfixation.</p>
            </div>
          </div>
        </div>
        <div id = 'experience'>
          <div class='fade-in-section is-visible'>
            <div class = 'section-header'>
              <span class='section-title'>Experience</span>
            </div>
          </div>
        </div>
        <div id = 'projects'>
          <div class='fade-in-section is-visible'>
            <div class = 'section-header'>
              <span class='section-title'>Software Creations</span>
            </div>
          </div>
        </div>
        <div class = 'fade-in-section'>
          <div id='footer'>
            <div class='credits'>
                <div>Designed in Figma and Built by Yours Truly.</div>
                <div>All Rights Reserved. ©</div>
            </div>
          </div>
        </div>
      </div>
      <div class = 'navbar'></div>
    </div>
  );
}

export default App;
