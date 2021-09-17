import { useMostSearched } from '../hooks/useMostSearched'

import '../styles/mostSearchedSection.scss'

export function MostSearchedSection() {
  const { mostSearched } = useMostSearched()

  return (
    <section className="top-five">
      <header>Mais Procuradas</header>
      <hr></hr>
      <ul>
        {mostSearched.map(search => {
          return (
            <li key={search.id} >{search.city}</li>
          )
        })}
      </ul>
    </section>
  )
}