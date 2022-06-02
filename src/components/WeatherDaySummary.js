import { getRadiationUVText, getVisibilityText, getWindText } from "../utils/utils";

function WeatherDaySummary({ day }) {

    return <div className="summary">
        {/* <img src={day.condition.icon} alt={day.condition.text} /> */}
        {/* <div className="extraData-text">{day.condition.text}</div> */}
        <div className="textInfo">Temperatura media: {day.avgtemp_c}º</div>
        <div className="textInfo">Precipitaciones: {day.totalprecip_mm} mm</div>
        <div className="textInfo">Humedad: {day.avghumidity}%</div>
        <div className="textInfo">Vel viento: {getWindText(day.maxwind_kph)}</div>
        <div className="textInfo">Radiación: {getRadiationUVText(day.uv)}</div>
        <div className="textInfo">Visibilidad: {getVisibilityText(day.avgvis_km)}</div>
    </div>
}

export default WeatherDaySummary;