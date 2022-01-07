import React from "react";
import "./Movie.css";

const IMG_API = "https://image.tmdb.org/t/p/w500";

const Movie = (props) => {
  return (
    <div className="movie">
      <img src={IMG_API + props.poster_path} alt={props.title} />
      <div className="movie-info">
        <span className="movie-name">{props.title}</span>
        <span className="rating">{props.vote_average}</span>
      </div>

      <div>
        <span className="movie-description">{props.overview}</span>
      </div>
    </div>
  );
};

export default Movie;
