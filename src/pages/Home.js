import react, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css";

const Movies_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=4c9bae57f0d85b6ebeef257e0dcbfe2c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free";

const Search_API =
  "https://api.themoviedb.org/3/search/movie?api_key=4c9bae57f0d85b6ebeef257e0dcbfe2c&query=";

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async () => {
    getMovies(Movies_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    getMovies(Search_API + searchTerm);
    fetch(Search_API + searchTerm);

    setSearchTerm("");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="search">
        <header>
          <form onSubmit={handleOnSubmit}>
            <input
              className="searchbar"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>
        </header>
        <div className="movie-container">
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
