import { useState } from 'react'
import { useWeather } from '../hooks/useWeather'
import { useLastSearches } from '../hooks/useLastSearched'
import { useMostSearched } from '../hooks/useMostSearched'
import { WeatherCity } from './WeatherCity'

import searchImg from '../assets/search.svg'
import '../styles/main.scss';
import { ToastContainer } from 'react-toastify'

export function Main() {
  const [city, setCity] = useState('')
  const { weather, getWeather } = useWeather()
  const { getLastSearches } = useLastSearches()
  const { getMostSearched } = useMostSearched()

  async function handleSearchWeather() {
    await getWeather(city)
    getLastSearches()
    getMostSearched()
  }

  return (
    <main  className="main">
      <div className="search">
        <input 
          type="text" 
          placeholder="Nome da Cidade"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <button onClick={() => handleSearchWeather()}>
          <img src={searchImg} alt="Pesquisa" />
        </button>
      </div>
      {Object.keys(weather).length === 0 ? '' : <WeatherCity weather={weather} /> }
      <ToastContainer />
    </main>
  )
}