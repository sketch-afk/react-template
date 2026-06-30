import { render, createElement, useState } from 'yash-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style="text-align: center; font-family: monospace; padding-top: 100px; color: white;">
      <h1>🚀 Welcome to yash-react!</h1>
      <p>Edit <code>src/main.jsx</code> and save to test HMR.</p>
      
      <button 
        onClick={() => setCount(c => c + 1)}
        style="padding: 10px 20px; font-size: 16px; margin-top: 20px; cursor: pointer;"
      >
        Count is: {count}
      </button>
    </div>
  );
}

render(<App />, document.getElementById("root"));