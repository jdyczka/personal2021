
import './App.scss';
import React, { useState } from 'react';
import Works from './Works';

function App() {

  const patterns = [
    'stardust',
    'rockywall',
    'vintage_speckles',
    'old_wall',
    'concrete-texture',
    'lightpaperfibers',
    'concrete_seamless',
    'ep_naturalwhite',
    'just-waves',
    'old_moon',
    'bgnoise_lg',
    'graphy',
    'texturetastic_gray',
    // 'brickwall',
    // 'mochaGrunge',
    // 'mooning',
    // 'tic-tac-toe',
    // 'wavy-dots',
    // 'grilled',
    // 'kindajean',
    // 'ricepaper',
    // 'ricepaper2',
    // 'struckaxiom',
    // 'subtle_zebra_3d',
    // 'white_paperboard'
  ];

  const [currentBg, setCurrentBg] = useState(patterns[0])

  return (
    <div className={'app bg-' + currentBg}>
      <header className="App-header">

      </header>
      <section>
        <h1>Hi, I'm Joanna</h1>
        <form>
          {
            patterns.map(p => (
              <div key={p}>
                <input type='radio' id={p} value={p} name='bg' onChange={ev => setCurrentBg(ev.target.value)} />
                <label htmlFor={p}>{p}</label>
              </div>
              ))
          }
        </form>
      </section>
      <Works/>
    </div>
  );
}

export default App;
