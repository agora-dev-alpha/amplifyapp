/*
 * As far as I tell, This is where the primary logic for the
 * is held. It's just a single function that returns some html ..
 */

import logo from './logo.svg';
import './App.css';


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />A
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
