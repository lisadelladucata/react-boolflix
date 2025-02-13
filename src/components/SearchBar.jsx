import { useState } from "react";
import { useDataContext } from "../contexts/DataContext";
import axios from "axios";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const { setMovies } = useDataContext();

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "f5293db0fb1bf834041dbc769e426773",
          language: "it-IT",
          query: search,
        },
      })
      .then((res) => setMovies(res.data.results));
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          name="search"
          type="search"
          placeholder="Cerca..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Cerca</button>
      </form>
    </>
  );
}
