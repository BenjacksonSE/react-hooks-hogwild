import React, { useState } from "react";
import HogHolder from "./HogHolder";
import HogFilter from "./HogFilter";
import HogSorter from "./HogSorter"
import Nav from "./Nav";
import hogs from "../porkers_data";


function App() {
	const [filterBy, setFilterBy] = useState("All");
	const [sortBy, setSortBy] = useState("name");

	//All filter Handlers
	function handleFilterChange(e) {
		setFilterBy(e.target.value)
	}

	const filteredHogs = hogs.filter((hog) => {
		if(filterBy === "All") {
			return true;
		}
		return hog.greased.toString() === filterBy;
	})


	//All sorting Handlers
	function handleSortChange(e) {
		setSortBy(e.target.value)
	}

	const hogsToDesplay = filteredHogs.sort((a, b) => {
		if(sortBy === "name") {
			let x = a.name.toLowerCase();
      		let y = b.name.toLowerCase();
      		if (x < y) {
        		return -50;
      		}
      		if (x > y) {
        		return 50;
      		}
      		return 0;
		}
		return a.weight - b.weight
	});

	return (
    <div className="App">
      <Nav />
      <HogFilter handleFilterChange={handleFilterChange} />
	  <HogSorter handleSortChange={handleSortChange} />
      <HogHolder hogs={hogsToDesplay} />
    </div>
  );
}

export default App;
