import { useEffect, useState } from "react";
import debounce from 'lodash.debounce'

// const baseURL = 'http://localhost:4000'
const baseURL = 'https://weatheranimatedbackend.up.railway.app'
export default function useRapidApi() {

  //const [lat, setLat] = useState(null);
  //const [lon, setLon] = useState(null);
  const [status, setStatus] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    getLocation()
  }, []);




  const doCityFilter = debounce(async location => {
    if (!location) return
    console.log('====>', location)

    const url = `${baseURL}/forecast/${location}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if(!data.error) setJsonData(data);
  }, 500)


  const handleChangeLocation = (location) => {
    doCityFilter(location)
  }


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        //setLat(position.coords.latitude);
        //setLon(position.coords.longitude);
        sendFetch(position.coords.latitude, position.coords.longitude)
      }, () => {
        setStatus('Unable to retrieve your location');
        sendFetch(41.40316333508203, 2.1922144172946068)

      });
    }
  }
  async function sendFetch(lat, lon) {
    const url = `${baseURL}/forecast?lat=${lat}&lon=${lon}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setJsonData(data);
  }

  return {
    jsonData, status, handleChangeLocation
  }
}