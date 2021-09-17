import { Request, Response } from 'express'
import { ListMostSearchedUseCase } from './ListMostSearchedUseCase'

export class ListMostSearchedController {
  constructor(private listMostSearchedUseCase: ListMostSearchedUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const mostSearched = await this.listMostSearchedUseCase.execute()

    return res.json({mostSearched}).send()
  }
}