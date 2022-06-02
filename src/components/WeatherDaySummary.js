import { getRadiationUVText, getVisibilityText, getWindText } from "../utils/utils";

function WeatherDaySummary({ day }) {

    return <ul className="summary">
        <li className="textInfo">Temp media: {day.avgtemp_c}º</li>
        <li className="textInfo">Precipit: {day.totalprecip_mm} mm</li>
        <li className="textInfo">Humedad: {day.avghumidity}%</li>
        <li className="textInfo">Vel viento: {getWindText(day.maxwind_kph)}</li>
        <li className="textInfo">Radiación: {getRadiationUVText(day.uv)}</li>
        <li className="textInfo">Visibilidad: {getVisibilityText(day.avgvis_km)}</li>
    </ul>
}

export default WeatherDaySummary;