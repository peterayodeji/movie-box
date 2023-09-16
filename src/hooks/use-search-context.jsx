import { useContext } from "react";
import SearchContext from "../context/searchData";

function useSearchContext() {
  return useContext(SearchContext);
}

export default useSearchContext;
