function WeatherDaySummary({day}) {
    const getRadiationUVText = (value) => {
        if(value <= 2) return 'Bajo';
        if(value <= 5) return 'Moderado';
        if(value <= 7) return 'Alto';
        if(value <= 10) return 'Muy alto';
        return 'Extremo';
    }
    return <div className="extraData">
        <img src={day.condition.icon} alt={day.condition.text} />
        <div className="extraData-text">{day.condition.text}</div>
    <div className="textInfo">
        Temperatura media: {day.avgtemp_c}ºC
    </div>
    <div className="textInfo">
        Precipitaciones: {day.totalprecip_mm} mm
    </div>
    <div className="textInfo">
        Humedad: {day.avghumidity}%
    </div>
    <div className="textInfo">
        Vel viento: {day.maxwind_kph}km/h
    </div>
    <div className="textInfo">
        Radiación: {day.uv} {getRadiationUVText(day.uv)}
    </div>
    <div className="textInfo">
        {/* <img width="20px" src={data.windIcon} alt="wind" /> */}
        Visibilidad: {day.avgvis_km} km
    </div>
</div>
}

export default WeatherDaySummary;