import SearchBar from "../SearchBar/SearchBar"


export const Nav = ( props ) => {
  return (
    <div>
        <SearchBar onSearch={props.onSearch}  />
    </div>
  )
}