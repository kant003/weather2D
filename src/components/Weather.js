import SvgComponent from './Field';
import { useState } from 'react';
import Menu from './Menu';
import WheatherDaily from './WheatherDaily';
import WheatherPhases from './WheatherPhases';
import WeatherDaySummary from './WeatherDaySummary';
import WeatherListDays from './WeatherListDays';

import '../styles/Weather.css';
import '../styles/Menu.css';


function Weather({ jsonData, svgRef }) {
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
        <SvgComponent svg={svgRef} className="svg" />
        <div className="infoContainer">
            <WeatherListDays days={jsonData.forecast.forecastday} menu={daySelected} onClickMenu={onClickChangeDaySelected}></WeatherListDays>
            <div className="locationName">{jsonData.location.name}</div>
            <div className="state">{jsonData.current.isDay?jsonData.current.condition.condition_spanishDayText:jsonData.current.condition.condition_spanishNightText}</div>
            <div className="temperature">{jsonData.current.temp_c}º</div>
            
            <div className="extraInfo">
                <Menu menu={menuSelected} onClickMenu={onClickChangeMenuSelected}></Menu>
                
                {menuSelected === 0 && <WeatherDaySummary day={jsonData.forecast.forecastday[daySelected].day}></WeatherDaySummary>}
                {menuSelected === 1 && <WheatherDaily hours={jsonData.forecast.forecastday[daySelected].hour}></WheatherDaily>}
                {menuSelected === 2 &&  <WheatherPhases astro={jsonData.forecast.forecastday[daySelected].astro}></WheatherPhases>}
            </div>
        </div>
    </div>
}

export default Weather;