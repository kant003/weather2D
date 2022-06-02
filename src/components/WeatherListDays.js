import { indexToDay } from "../utils/utils";

function WeatherListDays({days, menu=0, onClickMenu}) {

    return <ul className="menu_list background_clear">
            {days.map( (day,i) => <li key={i} onClick={() => onClickMenu(i)}>
                    <div className={menu===i? 'active':''}>{indexToDay(i)}</div>
                </li>
            )}
        </ul>
}

export default WeatherListDays;