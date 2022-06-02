import { epochToHour } from "../utils/utils";

function WheatherDaily({ hours }) {
    return <div>

        <div className="daily">
            {hours
                .filter(hour => epochToHour(hour.time_epoch) < 12)
                .map(hour => <div key={hour.time} className='time-element'>
                    <div>{epochToHour(hour.time_epoch) + ':00'}</div>
                    <div><img src={hour.condition.icon} alt="time" /></div>
                </div>
                )}
        </div>
        <div className="daily">
            {hours
                .filter(hour => epochToHour(hour.time_epoch) >= 12)
                .map(hour => <div key={hour.time} className='time-element'>
                    <div>{epochToHour(hour.time_epoch) + ':00'}</div>
                    <div><img src={hour.condition.icon} alt="time" /></div>
                </div>
                )}
        </div>

    </div>
}

export default WheatherDaily;