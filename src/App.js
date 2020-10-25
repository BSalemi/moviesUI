import React from "react";
import {useState, useEffect} from "react";

import { movies$ } from './movies.js'

import Movie from './Movie.js'

const App = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    if(movies){
      movies$.then(data => setMovies(data))
    }
  })
  const generateMovies = () => {
    const movieCards = movies.map(movie => {
      return <Movie key={movie.id} id={movie.id} title={movie.title} category={movie.category} image={movie.url} likes={movie.likes} dislikes={movie.dislikes}/>
    })
    return movieCards
  }
  return (
    <div className="App">
      {generateMovies()}
    </div>
  );
}

export default App;
