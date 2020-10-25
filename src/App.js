import React from "react";
import {useState} from "react";

import movies from './movies.js'

const App = () => {

  generateMovies = () => {
    const movieCards = movies.map(movie => {
      return <Movie id={movie.id} title={movie.title} category={movie.category} image={movie.url} likes={movie.likes} dislikes={movie.dislikes}/>
    })
    return movieCards
  }
  return (
    <div className="App">
      {this.generateMovies()}
    </div>
  );
}

export default App;
