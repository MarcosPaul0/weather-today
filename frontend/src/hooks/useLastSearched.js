import axios from 'axios'
import { useEffect, useState, createContext, useContext } from 'react'

const LastSearchesContext = createContext()

export function LastSearchedProvider(props) {
  const [lastSearches, setLastSearches] = useState([])

  async function getLastSearches() {
    await axios.get('http://localhost:3333/lastSearches')
      .then(resp => setLastSearches(resp.data.lastSearches))
  }

  useEffect(() => { 
    getLastSearches()
  }, [])

  return (
    <LastSearchesContext.Provider value={{
      lastSearches,
      getLastSearches
    }}>
      {props.children}
    </LastSearchesContext.Provider>
  )
}

export function useLastSearches() {
  const context = useContext(LastSearchesContext)
  
  return context
}