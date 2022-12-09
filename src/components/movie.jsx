import React from "react";
import { useNavigate } from "react-router-dom";
export const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280";

export default function Movie(props){
    const navigate = useNavigate();
    const onClickMovieItem = () => {
        navigate(`/movie/${props.title}`, {
            state: props
        });
    }

    return (
        <div className="movie_container" onClick={onClickMovieItem}>
            <img src={IMG_BASE_URL + props.poster_img} alt="Poster Img" />
            <div className="movie_info">
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
        </div>
    )
}