function WheatherPhases({ astro }) {
    return <div className="phases">
        <div>Salida Sol: {astro.sunrise}</div>
        <div>Puesta Sol: {astro.sunset}</div>
        <br/>
        <div>Luna en {astro.moon_phase}</div>
        <div>Salida Luna: {astro.moonrise}</div>
        <div>Puesta Luna: {astro.moonset}</div>
    </div>
}

export default WheatherPhases;