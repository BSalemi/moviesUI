import React from "react";
import {useState, useEffect} from "react";

import { movies$ } from './movies.js'
import Filter from './Filter.js'
import Movie from './Movie.js'

const App = () => {

  const [movies, setMovies] = useState([])
  const [search, setFilter] = useState("")

  useEffect(() => {
    if(movies){
      movies$.then(data => setMovies(data))
    }
  })

  const generateMovies = () => {

    if(search.length > 0){
      const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search))
      const movieCards = filteredMovies.map(movie => {
        return <Movie key={movie.id} id={movie.id} title={movie.title} category={movie.category} image={movie.url} likes={movie.likes} dislikes={movie.dislikes}/>
      })
      return movieCards
    } else {
      const movieCards = movies.map(movie => {
        return <Movie key={movie.id} id={movie.id} title={movie.title} category={movie.category} image={movie.url} likes={movie.likes} dislikes={movie.dislikes}/>
      })
      return movieCards
    }
  }

  const updateSearch = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="App">
      <Filter updateSearch={updateSearch}/>
      <div className="movieContainer">
        {generateMovies()}
      </div>
    </div>
  );
}

export default App;
