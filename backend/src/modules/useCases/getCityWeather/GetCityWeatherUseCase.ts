require('dotenv').config()
import axios from 'axios'

import { IHistoricRepository } from '../../repositories/IHistoricRepository'

export class GetCityWeatherUseCase {
  constructor(
    public historicRepository: IHistoricRepository,
  ) {}

  async registerSearch(city: string) {
    const cityInHistory = await this.historicRepository.findByCity(city)
        
    if(!cityInHistory) {
      this.historicRepository.registerSearch(city)
    } else {
      this.historicRepository.updateCounter(city)
    }
  }

  async execute(city: string) {
    const weatherCity = await axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: process.env.OPENWEATHERMAP_KEY,
        lang: 'pt_br',
        units: 'metric'
      }
    })
      .then(response => {
        this.registerSearch(city)   

        return response.data
      })
      .catch(err => err)

    return weatherCity
  }
}