import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Filter from './components/Filter';
import { motion, AnimatePresence} from 'framer-motion'

//https://api.themoviedb.org/3/movie/550?api_key=c7dd33de3202ded77fba1ae6e3f4a1b1

function App() {
  const apiKey = "c7dd33de3202ded77fba1ae6e3f4a1b1";
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    fetchMovies();
    console.log(movies)
  }, []);

  const fetchMovies = async () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((res) => {
      setMovies(res.data.results);
      setFiltered(res.data.results);
    })
 };

  return (
    <div className="App">
      <Filter movie={movies} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div 
      layout 
      className="popular-movies">
        <AnimatePresence>
        {filtered.map(movie => {
            return <Movie key={movie.id} movie={movie} />
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
