import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather.js';
import { createRef } from 'react';
import WeatherController from './components/WeatherController';
import mock from './components/mock'


function App() {

  const svgRef = createRef()

  return (<>
    <div className="title">WEATHER</div>
    <WeatherController data={mock} svgRef={svgRef}></WeatherController>
    <Weather data={mock} locationName={'Vigo'} 
    temperature={20} 
    condition={'Soleado'}  
    precip={20} 
    humidity={40} 
    wind={15}
    svgRef={svgRef}></Weather>
  </>
  );
}

export default App;
