import HeaderPage from "../pages/HeaderPage";
import FeaturedPage from "../pages/FeaturedPage";
import Footer from "./Footer";

function Home({ movies }) {
  return (
    <>
      <HeaderPage />
      <FeaturedPage movies={movies} />
      <Footer />
    </>
  );
}

export default Home;
