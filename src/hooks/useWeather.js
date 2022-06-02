import { useEffect, useState } from 'react';
import { remap } from '../utils/utils';



const changeCssClass = (ref, addClass, removeClass) => {
  ref.classList.add(addClass);
  ref.classList.remove(removeClass);
}

export default function useWeather(jsonData, svgRef) {
  const [isDay, setIsDay] = useState(jsonData.current.is_day === 1 ? true : false);
  const [cloudDensity, setCloudDensity] = useState(jsonData.current.cloud);
  const [windSpeed, setWindSpeed] = useState(jsonData.current.wind_kph);
  const [isRain, setIsRain] = useState(jsonData.current.precip_in > 0 ? true : false);


  useEffect(() => {


    const isDay = jsonData.current.is_day === 1 ? true : false;
    const cloudDensity = jsonData.current.cloud;
    const windSpeed = jsonData.current.wind_kph;
    const isRain = jsonData.current.precip_in > 0 ? true : false;

    setIsDay(isDay);
    setCloudDensity(cloudDensity);
    setWindSpeed(windSpeed);
    setIsRain(isRain);

    setPeriod(isDay)
    setClouds(cloudDensity, windSpeed, isRain)
    toRain(isRain)
  }, [jsonData]);


  if (svgRef === undefined) return "loading..."

  const handleChangeDia = (e) => {
    setIsDay(e.target.checked)
    setPeriod(e.target.checked)
  }
  const handlChangeCloudsAmount = (e) => {
    const amount = e.target.value
    setCloudDensity(amount)
    setClouds(amount, windSpeed, isRain)
  }

  const handlChangeWindAmount = (e) => {
    const amount = e.target.value
    setWindSpeed(amount)
    console.log(amount)
    setClouds(cloudDensity, e.target.value, isRain)
  }

  const handleChangeRain = (e) => {
    setIsRain(e.target.checked)
    toRain(e.target.checked)
    setClouds(cloudDensity, windSpeed, e.target.checked)
  }


  const setClouds = (amount, speed = 0, isRain) => {
    amount = parseInt(remap(amount, 0, 100, 0, 14))
    // console.log('cambia nuevs',amount,remap(speed, 0,180, 8000,1000) )
    const cloudsRef = svgRef.current.children[6]
    // const typeCloud = isRain? 'showDarkCloud':'showCloud'

    for (let i = 1; i < 15; i++) {
      const cloudRef = cloudsRef.children[i]
      if (i <= amount) {
        cloudRef.classList.remove("hideCloud");
        if (isRain) {
          changeCssClass(cloudRef, 'showDarkCloud', 'showCloud')
        } else {
          changeCssClass(cloudRef, 'showCloud', 'showDarkCloud')
        }

        cloudRef.animate([
          { transform: 'translateX(-200px)' },
          { transform: 'translateX(150px)' }
        ], {
          duration: remap(speed, 0, 180, 40000, 500) + parseInt(Math.random() * 2000),
          timingFuntion: 'linear',
          delay: 0,
          iterations: Infinity
        });
      } else {
        changeCssClass(cloudRef, "hideCloud", "showCloud");
        changeCssClass(cloudRef, "hideCloud", "showDarkCloud");
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
      changeCssClass(sunRef, 'showSun', 'hideSun')
      changeCssClass(moonRef, 'hideMoon', 'showMoon')
      changeCssClass(dark_backgroundRef, 'hide', 'show')
      changeCssClass(starsRef, 'hideStars', 'showStras')
      changeCssClass(veloRef, 'hide', 'show')
    }
    else {
      changeCssClass(sunRef, 'hideSun', 'showSun')
      changeCssClass(moonRef, 'showMoon', 'hideMoon')
      changeCssClass(dark_backgroundRef, 'show', 'hide')
      changeCssClass(starsRef, 'showStars', 'hideStars')
      changeCssClass(veloRef, 'show', 'hide')
    }
  }

  const toRain = (raining) => {
    const rainRef = svgRef.current.children[9]

    raining ? changeCssClass(rainRef, 'show', 'hide') : changeCssClass(rainRef, 'hide', 'show')


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