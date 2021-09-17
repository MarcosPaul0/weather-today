import axios from 'axios'
import { useState } from 'react'

export function useWeather() {
  const [weather, setWeather] = useState({})

  async function getWeather(city) {
    const data = await axios.post('http://localhost:3333/weather', {city})

    setWeather(data.data)
  }

  return {
    weather,
    getWeather
  }
}