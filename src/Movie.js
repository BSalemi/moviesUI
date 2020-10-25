import React from "react";

const Movie = (props) => {
    const {title, image, likes, dislikes} = props
    return(
        <div className="movieCard">
            <h3>{title}</h3>
            <img src={image} alt="movie-poster" className="movieImage"/>
            <div className="reviewButtonsContainer">
               <button> Like </button>{likes}
               <button> Dislike</button>{dislikes}
            </div>
        </div>
    )
}

export default Movie