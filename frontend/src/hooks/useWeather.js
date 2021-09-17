import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import'react-toastify/dist/ReactToastify.css'


export function useWeather() {
  const [weather, setWeather] = useState({})

  function errorNotify(msg) {
    return (
      toast.error(msg, {
        position: "top-right",
        autoClose: 4000,
        theme: 'colored',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    )
  }

  async function getWeather(city) {

    try {
      await axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: process.env.REACT_APP_OPENWEATHERMAP_KEY,
          lang: 'pt_br',
          units: 'metric'
        }
      })
        .then(async resp => {
          setWeather(resp.data)
          await axios.post('http://localhost:3333/weather', {city})
        })
        .catch(() => errorNotify('Cidade não encontrada'))
    } catch (error) {
      throw error
    }
  }

  return {
    weather,
    getWeather
  }
}