import React from "react"

function HogFilter ( {handleFilterChange }) {
    return (
      <div className="filterWrapper">
        <lable>"How would u like your hogs? 🐷"</lable>
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="true">Greased</option>
        </select>
      </div>
    )
}

export default HogFilter;