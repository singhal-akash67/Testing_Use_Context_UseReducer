import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import Test from './Test';

export const TestContext = createContext();

function App() {
  let text = "Helo";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TestContext.Provider value={text}>  <Test />
          </TestContext.Provider>
        </a>
      </header>
    </div>
  );
}

export default App;
