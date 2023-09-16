import SearchButton from "../svg/Search.svg";
import useSearchContext from "../hooks/use-search-context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const navigate = useNavigate();
  const { submitSearch } = useSearchContext();
  const [enteredValue, setEnteredValue] = useState("");

  // console.log(submitSearch);

  const handleChange = function (e) {
    // console.log(e.target.value);

    const val = e.target.value;
    setEnteredValue(val);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    submitSearch(enteredValue);
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit} className="search-box">
      <input
        onChange={handleChange}
        value={enteredValue}
        type="text"
        name="search"
        id="search"
        className="search"
        placeholder="What do you want to watch?"
      />

      <img className="search-btn" src={SearchButton} alt="search" />
    </form>
  );
}

export default SearchInput;
