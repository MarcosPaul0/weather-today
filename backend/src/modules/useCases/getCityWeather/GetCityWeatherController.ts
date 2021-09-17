import { Request, Response } from 'express'
import { GetCityWeatherUseCase } from './GetCityWeatherUseCase'

export class GetCityWeatherController {
  constructor(private getCityWeatherUseCase: GetCityWeatherUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { city } = req.body

    const result = await this.getCityWeatherUseCase.execute(city)
      .then(() => res.status(200).json({success: 'Search registered!'}).send())
      .catch(() => res.status(400).json({error: 'Search not registered!'}).send())

    return result
  }
}