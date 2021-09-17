import { HistoricItem } from '../../model/HistoricItem'
import { IHistoricRepository } from '../IHistoricRepository'

export class HistoricRepository implements IHistoricRepository { //Implementação sem permanência de dados
  private history: HistoricItem[]
  
  private static INSTANCE: HistoricRepository

  private constructor() {
    this.history = []
  }

  public static getInstance(): HistoricRepository {
    if(!HistoricRepository.INSTANCE) {
      HistoricRepository.INSTANCE = new HistoricRepository()
    }
    return HistoricRepository.INSTANCE
  }

  async listMostSearched(): Promise<HistoricItem[]> {
    const topFive: HistoricItem[] = this.history.reduce((acc, city) => {

      if(acc.length < 5) {
        acc.push(city)
      } else {
        let smaller = acc[0]
        for(let i = 1; i < acc.length; i++) {
          if(acc[i].count < smaller.count) {
            smaller = acc[i]
          }
        }
  
        if(city.count > smaller) {
          acc[acc.indexOf(smaller)] = city
        }
      }

      return acc
    }, [])

    return topFive
  }

  async listLastSearches(): Promise<HistoricItem[]> {
    return this.history.slice(0, 5)
  }

  registerSearch(city: string) {
    const newCity = new HistoricItem()
    Object.assign(newCity, { 
      city,
      count: 1
    })


    this.history.push(newCity)
  }

  updateCounter(city: string) {
    this.history.forEach(cityHistory => {
      if(cityHistory.city === city) {
        cityHistory.count += 1
        return
      }
    })
  }

  async findByCity(city: string): Promise<HistoricItem> {
    const cityFound = this.history.find(cityHistory => cityHistory.city === city)

    return cityFound
  }
}