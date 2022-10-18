import axios from "axios";
import { useState } from "react";
import { MovieDetailType } from "../types/MovieDetailType";

type UseGetMovieDetail = {
  loading: boolean;
  movie: MovieDetailType | null;
  getMovie: (idMovie: string) => void;
};

const useGetMovieDetail = (): UseGetMovieDetail => {
  const [loading, setloading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieDetailType | null>(null);

  const getMovie = async (idMovie: string) => {
    setloading(true);

    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_MOVIE_DETAIL_URL}&group_id=${idMovie}`
      );

      setMovie(data.response.group.common);
    } catch (err) {
      setMovie(null);
    } finally {
      setloading(false);
    }
  };

  return {
    loading,
    getMovie,
    movie,
  };
};

export default useGetMovieDetail;
