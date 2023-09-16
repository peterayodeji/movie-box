import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details";
import InfoPage from "./InfoPage";
import { fetchMovieDetails } from "../util/api";

function DetailsPage() {
  const [error, setError] = useState();
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function loadMovieDetails() {
      try {
        const details = await fetchMovieDetails(id);
        setMovieDetails(details);
      } catch (err) {
        console.log(err.message);
        setError(err);
      }
    }

    loadMovieDetails();
  }, [id]);

  return (
    <div className="details-page">
      {error && <InfoPage error={error} />}
      {!error && movieDetails && <Details movieDetails={movieDetails} />}
    </div>
  );
}

export default DetailsPage;
