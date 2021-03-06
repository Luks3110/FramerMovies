import React, { useEffect } from "react";
import './filter.css'

function Filter({ setActiveGenre, activeGenre, movie, setFiltered }) {

  useEffect(() => {
    if(activeGenre === 0){
      setFiltered(movie);
      return
    }
    const filtered = movie.filter((movie) =>  movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);

  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All</button>
      <button className={activeGenre === 35 ? "active" : ""} onClick={() => setActiveGenre(35)}>Comedy</button>
      <button className={activeGenre === 28 ? "active" : ""} onClick={() => setActiveGenre(28)}>Action</button>
    </div>
  );
}

export default Filter;
