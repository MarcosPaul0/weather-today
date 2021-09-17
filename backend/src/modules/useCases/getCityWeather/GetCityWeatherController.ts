import { Request, Response } from 'express'
import { GetCityWeatherUseCase } from './GetCityWeatherUseCase'

export class GetCityWeatherController {
  constructor(private getCityWeatherUseCase: GetCityWeatherUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { city } = req.body

    const weatherCity = await this.getCityWeatherUseCase.execute(city)

    if(weatherCity.name === "Error") {
      return res.status(404).json(weatherCity).send()
    } else {
      return res.json(weatherCity).send()
    }
  }
}