import React from "react"

function HogSorter( {handleSortChange }) {
    return (
      <div classname="sorterWrapper">
        <lable>How u wanna sort them suckers?</lable>
        <select name="sorter" onChange={handleSortChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    );
}

export default HogSorter;