import { createContext, useState, useCallback } from "react";

// import axios from "axios";

const SearchContext = createContext();

function Provider({ children }) {
  const [search, setSearch] = useState("");

  const submitSearch = useCallback((term) => {
    // console.log(term);

    setSearch(term);
  }, []);

  const valueToShare = {
    search,
    submitSearch,
  };

  return (
    <SearchContext.Provider value={valueToShare}>
      {children}
    </SearchContext.Provider>
  );
}

export { Provider };
export default SearchContext;
