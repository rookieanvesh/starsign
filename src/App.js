import React from 'react';
import StarSignFormDemo from './components/StarSignFormDemo';
import './App.css';  // If you're using an App.css file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to StarSign 2.0</h1>
      </header>
      <main>
        <StarSignFormDemo />
      </main>
      <footer>
        {/* Your footer content */}
      </footer>
    </div>
  );
}

export default App;