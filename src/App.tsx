import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useDebounce } from "use-debounce";
import { getMovies } from "./app/slices/moviesSlice";
import logo from "./assets/logo.svg";
import SearchBar from "./components/SearchBar/SearchBar";
import Movies from "./components/Movies/Movies";
import { MovieType } from "./types/MovieType";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movies.movies);

  const [search, setSearch] = useState<string>("");
  const [filteredMovies, setFilteredMovies] = useState<MovieType[]>([]);

  const searchHandler = (e: any) => {
    setSearch(e.target.value.toLowerCase());
  };

  const [debouncedSearch] = useDebounce<string>(search, 300);

  useEffect(() => {
    const filteredMovies = movies.filter((movie) => {
      if (debouncedSearch === "") {
        return movie;
      } else {
        return movie?.title.toLowerCase().includes(debouncedSearch);
      }
    });
    setFilteredMovies(filteredMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, movies]);

  useEffect(() => {
    const promise = dispatch(getMovies());
    return () => {
      promise.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} alt="Logo clarovideo" width={213} height={43} />
      </div>

      <div className="search-container">
        <SearchBar searchHandler={searchHandler} />
      </div>

      <Movies movies={filteredMovies} />
    </div>
  );
}

export default App;
