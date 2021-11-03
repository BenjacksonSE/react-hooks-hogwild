import React, { useState } from "react";
import HogHolder from "./HogHolder";
import HogFilter from "./HogFilter";
import Nav from "./Nav";
import hogs from "../porkers_data";


function App() {
	const [filterBy, setFilterBy] = useState("All");

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

	return (
    <div className="App">
      <Nav />
      <HogFilter handleFilterChange={handleFilterChange} />
      <HogHolder hogs={filteredHogs} />
    </div>
  );
}

export default App;
