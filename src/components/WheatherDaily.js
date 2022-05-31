function WheatherDaily({hours}) {
    const epochToHour = (epoch) => new Date(epoch*1000).getHours()
    return <div> 
        <div className="time">
                {hours.filter(hour => epochToHour(hour.time_epoch) %2 === 0).map(hour => <div key={hour.time} className='time-element'>
                        <div>{epochToHour(hour.time_epoch)}</div>
                        <div><img src={hour.condition.icon} alt="time"/></div>
                    </div>
                )}
            </div>
         </div>
}

export default WheatherDaily;