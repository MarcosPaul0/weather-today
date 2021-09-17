import { useLastSearches } from '../hooks/useLastSearched'

import '../styles/lastSearchesSection.scss'

export function LastSearchesSection() {
  const { lastSearches } = useLastSearches()

  return (
    <section className="last-searches">
      <header>Últimas Pesquisas</header>
      <hr></hr>
      <ul>
        {lastSearches.map(search => {
          return (
            <li key={search.id}>{search.city}</li>
          )
        })}
      </ul>
    </section>
  )
}