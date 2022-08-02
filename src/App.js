/*
 * As far as I tell, This is where the primary logic for the
 * is held. It's just a single function that returns some html ..
 */

// import data
import logo from './logo.svg';

// import some styling
import './App.css';


// define a function
function App() {
  return (

   // A division defined by style 
    <div className="App">
      // Usually
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
          Learn React
        </a>
      </header>
    </div>
  );
}

// Get access to the content from code 
// above, by default ...
export default App;
