import React from 'react'
import { useState } from 'react';

const Search = () => {
  const [Search, setSearch] = useState("");
  return (
    <div>
      <h1>This is the Search Component</h1>

      <div className="search-container">
        <input type="search" placeholder='search Here' className='searchInput'
          value={Search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <hr />
        <button className='btn' onClick={() => {
          console.log(Search);
          const filteredrest = listofRestaurant.filter((res) => {
            res.data.info.name.toLowerCase().includes(Search.toLowerCase());
            setlistofRestaurant(filteredrest);
          })
        }}>Search</button>
      </div>
    </div>
    
  )
}

export default Search
