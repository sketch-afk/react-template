import { createElement, useState } from 'yash-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1>🚀 Welcome to yash-react!</h1>
      <p style="margin-top: 10px; color: #888;">
        Edit <code>src/App.jsx</code> and save to test HMR.
      </p>
      
      <button 
        className="count-button"
        onClick={() => setCount(c => c + 1)}
      >
        Count is: {count}
      </button>
    </div>
  );
}

export default App;