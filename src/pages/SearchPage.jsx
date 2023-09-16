import { useState, useEffect } from "react";
import { fetchSearchResult } from "../util/api";
import useSearchContext from "../hooks/use-search-context";
import InfoPage from "./InfoPage";
import Search from "../components/Search";

function SearchPage() {
  const { search } = useSearchContext();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function loadSearchResults() {
      setIsLoading(true);
      try {
        const searchResults = await fetchSearchResult(search);
        setSearchResults(searchResults);
      } catch (err) {
        console.log(err.message);
        console.error(err);
        setError(err);
      }
      setIsLoading(false);
    }

    loadSearchResults();
  }, [search]);

  return (
    <>
      {isLoading && <InfoPage isLoading={isLoading} />}
      {error && <InfoPage error={error} />}
      {!error && searchResults && <Search searchResults={searchResults} />}
    </>
  );
}

export default SearchPage;
