import SvgComponent from './Field';
import './Weather.css';
import windIcon from '../assets/wind2.png';
import humidityIcon from '../assets/humidity2.png';
import rainIcon from '../assets/rain2.png';
import { useState } from 'react';
import Menu from './Menu';
import WheatherDaily from './WheatherDaily';
import WheatherPhases from './WheatherPhases';
import WeatherDaySummary from './WeatherDaySummary';
import WeatherListDays from './WeatherListDays';
function Weather({ data, locationName, temperature, condition, precip, humidity, wind, svgRef }) {
    const [daySelected, setDaySelected] = useState(0);
    const [menuSelected, setMenuSelected] = useState(0);
    const onClickChangeDaySelected = (m) => {
        setDaySelected(m)
        console.log('aaa',m)
    }
    const onClickChangeMenuSelected = (m) => {
        setMenuSelected(m)
        console.log('bbbb',m)
    }
    return <div className="container">
        <SvgComponent svg={svgRef} className="dibujo" />
        <div className="infoContainer">
            <WeatherListDays days={data.forecast.forecastday} menu={daySelected} onClickMenu={onClickChangeDaySelected}></WeatherListDays>
            <div className="locationName">{data.location.name}</div>
            <div className="state">{data.current.isDay?data.current.condition.condition_spanishDayText:data.current.condition.condition_spanishNightText}</div>
            <div className="temperature">{data.current.temp_c}º</div>
            
            <Menu menu={menuSelected} onClickMenu={onClickChangeMenuSelected}></Menu>
            
            {menuSelected === 0 && <WeatherDaySummary day={data.forecast.forecastday[daySelected].day}></WeatherDaySummary>}
            {menuSelected === 1 && <WheatherDaily hours={data.forecast.forecastday[daySelected].hour}></WheatherDaily>}
            {menuSelected === 2 &&  <WheatherPhases astro={data.forecast.forecastday[daySelected].astro}></WheatherPhases>}
            
        </div>
    </div>
}

export default Weather;