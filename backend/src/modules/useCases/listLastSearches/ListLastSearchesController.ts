import { Request, Response } from 'express'
import { ListLastSearchesUseCase } from './ListLastSearchesUseCase'

export class ListLastSearchesController {
  constructor(private listLastSearchesUseCase: ListLastSearchesUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { city } = req.body

    const lastSearches = await this.listLastSearchesUseCase.execute(city)

    return res.json({lastSearches}).send()
  }
}