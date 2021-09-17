import { HistoricItem } from '../model/HistoricItem'

export interface IHistoricRepository {
  listMostSearched(): Promise<HistoricItem[]>
  listLastSearches(): Promise<HistoricItem[]>
  registerSearch(city: string): void;
  updateCounter(city: string): void;
  findByCity(city: string): Promise<HistoricItem>
}