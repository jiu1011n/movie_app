import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();
    console.log(state);

    return (
        <div className="page-container">
            <div className="movie_container">
                <img src={IMG_BASE_URL + state.poster_img} alt="Poster Img" />
                <div className="movie_info">
                    <h4>{state.title}</h4>
                    <span>{state.vote}</span>
                </div>
            </div>
        </div>
    )
}