function WheatherPhases({ astro }) {
    return <div>
        <div>Salida del sol: {astro.sunrise}</div>
        <div>Puesta del sol: {astro.sunset}</div>

        <div>Luna en fase: {astro.moon_phase}</div>
        <div>Salida de la luna: {astro.moonrise}</div>
        <div>Puesta de la luna: {astro.moonset}</div>
        <div>Luminosidad luna: {astro.moon_illumination}</div>

    </div>
}

export default WheatherPhases;