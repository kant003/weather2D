import useWeather from '../hooks/useWeather.js'

function WeatherController({ jsonData, svgRef, changeLocation }) {

    const { handleChangeDia, handlChangeCloudsAmount, handlChangeWindAmount, handleChangeRain,
        isDay, cloudDensity, windSpeed, isRain } = useWeather(jsonData, svgRef);

    return <aside className="config-box">
        <h1>Params manual</h1>
        <div>¿De día?: <input type="checkbox" checked={isDay} onChange={handleChangeDia} /></div>
        <div>Dens nubes:</div>
        <div><input type="range" value={cloudDensity} min="0" max="100" step="1" onChange={handlChangeCloudsAmount}></input> {cloudDensity}</div>
        <div>Vel viento:</div>
        <div><input type="range" value={windSpeed} min="0" max="180" step="1" onChange={handlChangeWindAmount}></input> {windSpeed} km/h</div>
        <div>¿Llueve?: <input type="checkbox" checked={isRain} onChange={handleChangeRain} /></div>
        <div>Localizacion:</div>
        <input type="text" onChange={(e) => changeLocation(e.target.value)} />
    </aside>
}

export default WeatherController;