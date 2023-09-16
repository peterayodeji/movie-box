import { useState, useEffect } from "react";
import Home from "../components/Home";
import InfoPage from "./InfoPage";
import { fetchData } from "../util/api";

function HomePage() {
  const [error, setError] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      try {
        const movies = await fetchData();
        const topTen = movies.slice(0, 10);
        setMovies(topTen);
      } catch (err) {
        console.error(err.message);
        setError(err);
      }
    }

    loadMovies();
  }, []);

  return (
    <>
      {error && <InfoPage error={error} />}
      {!error && movies && <Home movies={movies} />}
    </>
  );
}

export default HomePage;
