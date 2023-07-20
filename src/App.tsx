import React from 'react';
import './App.css';

import MouseTracker from './components/MouseTracker';
import KeyboardTracker from './components/KeyboardTracker';

function App() {
  return (
    <div className="App" >
      <MouseTracker>
        <KeyboardTracker />
      </MouseTracker>
    </div>
  );
}

export default App;
