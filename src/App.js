import './App.css';
import Weather from './components/Weather.js';
import { createRef } from 'react';
import WeatherController from './components/WeatherController';
import useRapidApi from './hooks/useRapidApi';


function App() {
  const svgRef = createRef()
  const { jsonData, status, handleChangeLocation } = useRapidApi();

  if(jsonData === null) return <div className="principal-container">Loading...</div>

  return (<div className="principal-container">
    <div className="title">WEATHER APP</div>
    {status && <p>{status}</p>}

    <WeatherController jsonData={jsonData} svgRef={svgRef} changeLocation={handleChangeLocation}></WeatherController>
    <Weather jsonData={jsonData} svgRef={svgRef}></Weather>
    <div className='mention'>Powered by <a href="https://rapidapi.com/">RapidAPI.com</a></div>
  </div>
  );
}

export default App;
