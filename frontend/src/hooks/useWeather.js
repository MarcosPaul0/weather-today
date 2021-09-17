import axios from 'axios'
import { useState } from 'react'

export function useWeather() {
  const [weather, setWeather] = useState({})

  async function getWeather(city) {
    const weatherCity = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: process.env.REACT_APP_OPENWEATHERMAP_KEY,
        lang: 'pt_br',
        units: 'metric'
      }
    })
      .then(resp => resp.data)
      .catch(err => err)
    
    await axios.post('http://localhost:3333/weather', {city})
      .catch(err => err)

    setWeather(weatherCity)
  }

  return {
    weather,
    getWeather
  }
}