import React from "react";
import { dummy } from "../dummy";
import Movie from "../components/Movie";

export default function Movies() {
    return (
        <div className="page-container">
            <div className="app-content">
                {
                    dummy.results.map((item) => (
                        <Movie
                            key={item.id}
                            poster_img={item.poster_path}
                            title={item.title}
                            vote={item.vote_average}
                        />
                    ))
                }
            </div>
        </div>
    )
}