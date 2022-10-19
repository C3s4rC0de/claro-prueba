import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getMovies } from "../../app/slices/moviesSlice";
import Movies from "../../components/Movies";
import SearchBar from "../../components/SearchBar";
import { MovieType } from "../../types/MovieType";
import styles from "./Home.module.css";

const Home = () => {
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
        return (
          movie?.title.toLowerCase().includes(debouncedSearch) ||
          movie?.title_original.toLowerCase().includes(debouncedSearch)
        );
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
    <div className="home">
      <div className={styles.searchContainer}>
        <SearchBar searchHandler={searchHandler} />
      </div>
      <Movies movies={filteredMovies} />
    </div>
  );
};

export default Home;
