import React from "react";
import {useState} from "react"

const Movie = (props) => {
    const {title, image, likes, dislikes} = props
    const [likesCount, setLikesCount] = useState(likes)
    const [dislikesCount, setDislikesCount] = useState(dislikes)

    return(
        <div className="movieCard">
            <h3>{title}</h3>
            <img src={image} alt="movie-poster" className="movieImage"/>
            <div className="reviewButtonsContainer">
                
               <button onClick={() => setLikesCount(likesCount + 1)}> Like </button>{likesCount}
               <button onClick={() => setDislikesCount(dislikesCount + 1)}> Dislike</button>{dislikesCount}
            </div>
        </div>
    )
}

export default Movie