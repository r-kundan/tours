import React from 'react'

function SearchResultList() {
  return (
    <div id="search">

    <div>
      <label htmlFor="">
        {" "}
        <i class="fa-solid fa-location-dot"></i> Location
      </label>
      <input type="text" placeholder="india" />
    </div>


    <div>
      <label htmlFor="">
        <i class="fa-solid fa-people-arrows"></i> Distance
      </label>
      <input type="text" placeholder="200km" />
    </div>


    <div>
      <label htmlFor="">
        <i class="fa-solid fa-people-group"></i> Max People
      </label>
      <input type="number" placeholder="2" />
    </div>


    <div>
      <button className="search-icon">
        {" "}
        <i class="fa-solid fa-magnifying-glass-location "></i>
      </button>
    </div>


  </div>
  )
}

export default SearchResultList