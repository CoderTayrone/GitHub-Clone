import { SelectSearch } from "./SearchContext"


export const AppProvider = ({children}) => {
  return (
    <SelectSearch>
      {children}
    </SelectSearch>
  )
}