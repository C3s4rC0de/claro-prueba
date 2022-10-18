import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { MovieType } from "../../types/MovieType";

type Props = {
  movies: MovieType[];
};

const Movies = ({ movies }: Props) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const xsGrid = useMediaQuery("(max-width:500px)");

  return (
    <Grid container p={4} px={8} rowSpacing={2} columnSpacing={2}>
      {movies.map((movie) => (
        <Link key={movie.id} to={"movie/" + movie.id}>
          <Grid item xs={xsGrid ? 6 : 4} sm={3} md={4} lg={3} xl={2}>
            <img
              src={
                md
                  ? movie.image_base_horizontal ?? ""
                  : movie.image_base_vertical ?? ""
              }
              alt={movie.title ?? ""}
              width={md ? 290 : 125}
              height={md ? 163 : 188}
            />
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};

export default Movies;
