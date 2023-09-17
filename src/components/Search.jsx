import Card from "./Card";
import HeaderBar from "./HeaderBar";
import Footer from "./Footer";
import useSearchContext from "../hooks/use-search-context";

function Search({ searchResults }) {
  const { search } = useSearchContext();

  const renderedCards = searchResults.map((result) => {
    return <Card key={result.id} movie={result} />;
  });

  return (
    <div className="search-page">
      <div className="heading-search">
        <HeaderBar />
      </div>

      <div className="container">
        <div className="search-results">
          <h2 className="heading--tertiary">
            Search results for <span>{search}</span>
          </h2>

          <div className="cards">{renderedCards}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Search;
