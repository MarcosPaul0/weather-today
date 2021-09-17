import '../styles/weatherCity.scss'

export function WeatherCity({weather}) {
  return (
    <div className="container">
      <div className="info">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Tempo" />
        <div className="temp">
          <strong>{weather.main.temp}°C</strong>
          <p>{weather.main.temp_min}° - {weather.main.temp_max}°</p>
        </div>
      </div>
      <div className="weather">
        <h1>{weather.name} | {weather.sys.country}</h1>
        <h2>{weather.weather.main}</h2>
        <p>Humidade: {weather.main.humidity}%</p>
        <p>Vento: {weather.wind.speed}km/h</p>
      </div>
    </div>
  )
}