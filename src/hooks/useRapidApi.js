import { useEffect, useState } from "react";
import debounce from 'lodash.debounce'

// const baseURL = 'http://localhost:4000'
const baseURL = 'https://weatheranimatedbackend.up.railway.app'

export default function useRapidApi() {

  const [status, setStatus] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    getLocation()
  }, []);


  const doCityFilter = debounce(async location => {
    if (!location) return

    const url = `${baseURL}/forecast/${location}`
    const response = await fetch(url)
    const data = await response.json()
    if (!data.error) setJsonData(data);
  }, 500)


  const handleChangeLocation = (location) => {
    doCityFilter(location)
  }


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('La geolocación no está soportada por tu navegador');
    } else {
      setStatus('Geolocalizandote...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        sendFetch(position.coords.latitude, position.coords.longitude)
      }, () => {
        setStatus('No puedo obtener tu localización');
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