import { useEffect } from 'react';
import useWeather from '../hooks/useWeather.js'

function WeatherController({ data, svgRef }) {

    const { /* sunRef, moonRef, dark_backgroundRef, cloudsRef, veloRef, starsRef, rainRef,*/
        handleChangeDia, handlChangeCloudsAmount, handlChangeWindAmount, handleChangeRain,
        isDay, cloudDensity, windSpeed, isRain } = useWeather(data, svgRef);


    return (<>
        <div className="config">
            <div>
                Perido: <input type="checkbox" checked={isDay} onChange={handleChangeDia} /> {isDay ? "Dia" : "Noche"}
            </div>
            <div>
                Densidad nubes: <input type="range" min="0" max="14" step="1" onChange={handlChangeCloudsAmount}></input> {cloudDensity}
            </div>
            <div>
                Velocidad viento: <input type="range" min="0" max="180" step="1" onChange={handlChangeWindAmount}></input> {windSpeed} km/h
            </div>
            <div>
                Precipitaciones: <input type="checkbox" checked={isRain} onChange={handleChangeRain} /> {isRain ? "Lloviendo" : "Sin lluvia"}
            </div>
        </div>
    </>
    );
}

export default WeatherController;