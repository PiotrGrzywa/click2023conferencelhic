import logo from './szybka.png';
import './App.css';
import chagneBackgroundColor from './utils/chagneBackgroundColor';
import myLongRunningFunction from './utils/longRunningFunction';

const newExtraFancyFeature = () => {
  myLongRunningFunction();
}

function App() {
  newExtraFancyFeature();
      
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          SZYBKA Apka
        </h1>
        <a
          className="App-link"
          href="https://dev.to/piotrgrzywa"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Piotr Grzywa
        </a>
        <button className="button" onClick={chagneBackgroundColor}>Change background</button>
      </header>
    </div>
  );
}

export default App;
