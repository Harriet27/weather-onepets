import logo from './logo.svg';
import './App.css';
import { useGetWeather } from './apis/hooks/weather';

function App() {
  const {
    data: weatherData,
    isLoading,
    error,
  } = useGetWeather();

  console.log('weatherData', weatherData);

  if (error) return error;
  if (isLoading) return null;

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
