import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzViMGQwYTQ4NjU3MDNlMDc3MjBmZTk2OGIxMjE3OCIsInN1YiI6IjY0ZmViNjM0YzJmZjNkMDEzODEwZjEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X059CzRbJfQR2OQYfCbBA-YISLVEbVlUX3GX0yXOzTg",
  },
};

// * Fetch movies
export async function fetchData() {
  const response = await axios.get(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    options
  );

  return response.data.results;
}

// * Get movie details using id
export async function fetchMovieDetails(movie_id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?language=en-US`,
    options
  );

  return response.data;
}

// * Search for movies by title
export async function fetchSearchResult(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );

  return response.data.results;
}
