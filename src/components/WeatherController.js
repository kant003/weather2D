import useWeather from '../hooks/useWeather.js'

function WeatherController({ jsonData, svgRef, changeLocation }) {

    const { handleChangeDia, handlChangeCloudsAmount, handlChangeWindAmount, handleChangeRain,
        isDay, cloudDensity, windSpeed, isRain } = useWeather(jsonData, svgRef);

    return <aside className="config-box">
        <h1>Prueba a cambiar</h1>
        <div>¿De día?: <input type="checkbox" checked={isDay} onChange={handleChangeDia} /></div>
        <div>Nubosidad:
            <input type="range" value={cloudDensity} min="0" max="100" step="1" onChange={handlChangeCloudsAmount}></input> <small>{cloudDensity}%</small></div>
        <div>Vel viento:
            <input type="range" value={windSpeed} min="0" max="180" step="1" onChange={handlChangeWindAmount}></input> <small> {windSpeed} km/h </small></div>
        <div>¿Llueve?: <input type="checkbox" checked={isRain} onChange={handleChangeRain} /></div>
        <div>Localizacion:
            <input type="text" onChange={(e) => changeLocation(e.target.value)} />
        </div>
    </aside>
}

export default WeatherController;