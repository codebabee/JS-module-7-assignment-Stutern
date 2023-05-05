import React from 'react';
import { useState } from 'react';
import '../SearchBar/SearchBar.css'

export default function SearchBar() {

  // define a state variable serach keyword using the use state hook and 
  // define setsearchkeyword to update the state.

  const [searchKeyword, setSearchKeyword] = useState(" ");

  const handleSearch = (event) => {
    if (event.key === 'Enter') {

      // add the search keyword to list 
      setSearchKeyword(event.target.value);

      //clear the search bar

      event.target.value = " ";
    }
  };

  return (
    <div>
      <input className="search-bar" type={"text"} onKeyDown={handleSearch} />
    {searchKeyword && (
      <div>{searchKeyword}</div>
    )}
    
    </div>
  );
}
