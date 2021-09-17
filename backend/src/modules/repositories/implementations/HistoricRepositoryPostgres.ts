import db from '../../../database/db'

import { HistoricItem } from '../../model/HistoricItem'
import { IHistoricRepository } from '../IHistoricRepository'

export class HistoricRepositoryPostgres implements IHistoricRepository {

  async listMostSearched(): Promise<HistoricItem[]> {
    const mostSearched = await db.select().table('historic').orderBy('count', 'desc').limit(5)

    return mostSearched
  }

  async listLastSearches(): Promise<HistoricItem[]> {
    const lastSearches = await db.select().table('historic').orderBy('searched_at', 'desc').limit(5)

    return lastSearches
  }

  registerSearch(city: string) {
    const search = new HistoricItem()
    Object.assign(search, {
      city,
      count: 1
    })

    db('historic').insert(search)
      .catch(err => {
        throw new Error(err)
      })
  }

  updateCounter(city: string) {
    db('historic').where({city: city}).update({searched_at: db.fn.now()}).increment('count', 1)
      .catch(err => {
        throw new Error(err)
      })
  }

  async findByCity(city: string): Promise<HistoricItem> {
    const cityInHistoric = await db.select().table('historic').where('city', '=', city)
    
    return cityInHistoric[0]
  }
}