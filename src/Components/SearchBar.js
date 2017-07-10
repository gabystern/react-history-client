import React from 'react';
import { Icon } from 'react-materialize'

const SearchBar = (props) => {
  return(
    <form className="input-field" onChange={props.handleSearch}>
      <div className="input-field">
        <input id="search" type="search" value={props.searchTerm} required/>
      </div>
    </form>
  )}

export default SearchBar;
