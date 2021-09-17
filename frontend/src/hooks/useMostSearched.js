import axios from 'axios'
import { useEffect, useState, createContext, useContext } from 'react'

const MostSearchedContext = createContext()

export function MostSearchedProvider(props) {
  const [mostSearched, setMostSearched] = useState([])

  async function getMostSearched() {
    await axios.get('http://localhost:3333/mostSearched')
      .then(resp => setMostSearched(resp.data.mostSearched))
  }

  useEffect(() => { 
    getMostSearched()
  }, [])

  return (
    <MostSearchedContext.Provider value={{
      mostSearched,
      getMostSearched
    }}>
      {props.children}
    </MostSearchedContext.Provider>
  )
}

export function useMostSearched() {
  const context = useContext(MostSearchedContext)

  return context
}