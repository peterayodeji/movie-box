import Footer from "../components/Footer";
import HeaderBar from "../components/HeaderBar";
import ErrorDisplay from "../components/ErrorDisplay";
import LoaderDisplay from "../components/LoaderDisplay";

function InfoPage({ error, isLoading }) {
  return (
    <div className="page-container">
      <div className="heading-search">
        <HeaderBar />
      </div>

      <div className="page-info">
        <div className="info-board">
          {error && <ErrorDisplay error={error} />}

          {isLoading && <LoaderDisplay />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default InfoPage;
