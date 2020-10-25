import React from "react";

const Movie = (props) => {
    const {title, image, likes, dislikes} = props
    return(
        <div className="movieCard">
            <h2>{title}</h2>
            <img src={image} alt="movie-poster" className="movieImage"/>
            Likes:{likes} Dislikes:{dislikes}
        </div>
    )
}

export default Movie