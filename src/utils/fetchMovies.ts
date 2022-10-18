import axios from "axios";

export const fetchMovies = async () => {
  return await axios.get(
    `${process.env.REACT_APP_API_MOVIES_URL}&quantity=50&from=0&level_id=GPS&order_way=DESC&order_id=200&filter_id=34270`
  );
};
