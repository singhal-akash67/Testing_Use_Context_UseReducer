import logo from './logo.svg';
import './App.css';
import { createContext, useReducer, useState } from 'react';
import Test from './Test';

export const TestContext = createContext();

const testReducer = (state, action) => {
  switch (action) {
    case 'first':
      return 'first state changed';
    case 'second':
      return 'second state changed';
  }

}

function App() {
  const [text, dispatch] = useReducer(testReducer, 'initial state');

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
          <TestContext.Provider value={{text, dispatch}}>  <Test />
          </TestContext.Provider>
        </a>
      </header>
    </div>
  );
}

export default App;




