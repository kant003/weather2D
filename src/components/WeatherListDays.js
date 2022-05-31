function WeatherListDays({days, menu=0, onClickMenu}) {
    const epochToDay = (epoch) => new Date(epoch*1000).getDate()
    const indexToDay = (index) => ['Hoy','Mañana','Pasado'][index]
    return <ul className="menu_list">
            {days.map( (day,i) => <li key={i} onClick={() => onClickMenu(i)}>
                    <div className={menu===i? 'active':''}>{indexToDay(i)}</div>
                </li>
            )}
        </ul>
}

export default WeatherListDays;