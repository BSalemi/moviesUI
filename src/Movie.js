import React from "react";
import {useState} from "react"

const Movie = (props) => {
    const {title, image, category, likes, dislikes} = props
    const [likesCount, setLikesCount] = useState(likes)
    const [dislikesCount, setDislikesCount] = useState(dislikes)

    return(
        <div className="movieCard">
            <h4>{title}</h4>
            {category}
            <img src={image} alt="movie-poster" className="movieImage"/>
            <div className="reviewButtonsContainer">
               <button onClick={() => setLikesCount(likesCount + 1)}> Like </button>{likesCount}
               <button onClick={() => setDislikesCount(dislikesCount + 1)}> Dislike</button>{dislikesCount}
            </div>
        </div>
    )
}

export default Movie