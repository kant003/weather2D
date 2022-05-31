import { createRef, useEffect, useState } from 'react';

function remap(x, in_min, in_max, out_min, out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default function useWeather(data, svgRef) {
  const [isDay, setIsDay] = useState(data.current.is_day===1?true:false);
  const [cloudDensity, setCloudDensity] = useState(data.current.cloud);
  const [windSpeed, setWindSpeed] = useState(data.current.wind_kph);
  const [isRain, setIsRain] = useState(data.current.precip_in>0?true:false);


  useEffect(() => {
    setPeriod(isDay)
    setClouds(cloudDensity, windSpeed)
    toRain(isRain)
  }, [svgRef]);


  if (svgRef === undefined) return "loading..."

  const handleChangeDia = (e) => {
    setIsDay(e.target.checked)
    setPeriod(e.target.checked)
  }
  const handlChangeCloudsAmount = (e) => {
    const amount = e.target.value
    setCloudDensity(amount)
    setClouds(amount, windSpeed)
  }

  const handlChangeWindAmount = (e) => {
    const amount = e.target.value
    setWindSpeed(amount)
    console.log(amount)
    setClouds(cloudDensity, e.target.value)
  }

  const handleChangeRain = () => {
    setIsRain(!isRain)
    console.log(isRain)
    toRain(isRain)
  }


  const setClouds = (amount, speed = 0) => {

    // console.log('cambia nuevs',amount,remap(speed, 0,180, 8000,1000) )
    const cloudsRef = svgRef.current.children[6]

    for (let i = 0; i < 15; i++) {
      const cloudRef = cloudsRef.children[i]
      if (i < amount) {
        cloudRef.classList.add("showCloud");
        cloudRef.classList.remove("hideCloud");
        cloudRef.animate([
          { transform: 'translateX(-200px)' },
          { transform: 'translateX(200px)' }
        ], {
          duration: remap(speed, 0, 180, 10000, 500) + parseInt(Math.random() * 1000),
          timingFuntion: 'linear',
          delay: 0,
          iterations: Infinity
        });
      } else {
        cloudRef.classList.add("hideCloud");
        cloudRef.classList.remove("showCloud");
      }
    }

  }
  const setPeriod = (day) => {
    const dark_backgroundRef = svgRef.current.children[2]
    const sunRef = svgRef.current.children[3]
    const moonRef = svgRef.current.children[4]
    const veloRef = svgRef.current.children[7]
    const starsRef = svgRef.current.children[8]

    if (day === true) {
      sunRef.classList.add("showSun");
      sunRef.classList.remove("hideSun");

      moonRef.classList.add("hideMoon");
      moonRef.classList.remove("showMoon");

      dark_backgroundRef.classList.add("hideDarkBackground");
      dark_backgroundRef.classList.remove("showDarkBackground");

      starsRef.classList.add("hideStars");
      starsRef.classList.remove("showStras");

      veloRef.classList.add("hideVelo");
      veloRef.classList.remove("showVelo");
    }
    else {
      sunRef.classList.add("hideSun");
      sunRef.classList.remove("showSun");

      moonRef.classList.add("showMoon");
      moonRef.classList.remove("hideMoon");

      dark_backgroundRef.classList.add("showDarkBackground");
      dark_backgroundRef.classList.remove("hideDarkBackground");

      starsRef.classList.add("showStars");
      starsRef.classList.remove("hideStars");

      veloRef.classList.add("showVelo");
      veloRef.classList.remove("hideVelo");
    }
  }

  const toRain = (raining) => {
    const rainRef = svgRef.current.children[9]

    if (raining === true) {
      //const cloudRef=cloudsRef.current.children[i]
      rainRef.classList.add("showVelo");
      rainRef.classList.remove("hideVelo");
    } else {
      rainRef.classList.add("hideVelo");
      rainRef.classList.remove("showVelo");
    }

    for (let i = 1; i < 91; i++) {
      const dropRef = rainRef.children[i]
      dropRef.animate([
        { transform: 'translateY(-100px)' },
        { transform: 'translateY(20px)' }
      ], {
        duration: parseInt(Math.random() * 2000),
        timingFuntion: 'linear',
        iterations: Infinity
      });
    }

  }

  return {
    handleChangeDia, handlChangeCloudsAmount, handlChangeWindAmount, handleChangeRain,
    isDay, cloudDensity, windSpeed, isRain
  }
}