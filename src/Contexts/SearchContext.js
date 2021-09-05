import { createContext, useContext, useState } from 'react'

// Criar Variabel Global

const SearchContext = createContext({});

export const SelectSearch = ({children}) => {

  const [search, setSearch] = useState('CoderTayrone');
  const [log, setLog] = useState();

  console.log(search)

  return (
    <SearchContext.Provider value={{setSearch, search, setLog, log}}>
      {children}
    </SearchContext.Provider>
  )
}

export function useGetSearch(){
  const context = useContext(SearchContext);

  if(!context) {
    console.log('Usando ');
  }

  return context
}