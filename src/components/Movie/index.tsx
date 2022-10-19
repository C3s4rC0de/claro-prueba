import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useGetMovieDetail from "../../hooks/useGetMovieDetail";
import GeneralMovieInfo from "../GeneralMovieInfo";
import styles from "./Movie.module.css";

import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

const Movie = () => {
  const { id } = useParams();
  const { movie, getMovie } = useGetMovieDetail();

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    getMovie(id as string);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className={styles.detail}>
        <div className={styles.backButton}>
          <Link to="/">
            <IconButton sx={{ color: "#FFF" }} aria-label="go back">
              <ArrowBack />
            </IconButton>
          </Link>
        </div>

        {md && (
          <img
            alt="fondo-pelicula"
            src={movie?.image_background}
            className={styles.movieBg}
          />
        )}

        <Grid container className={styles.movieContent}>
          <Grid item md={5} xs={12} className={styles.previewContainer}>
            <img
              alt="captura-pelicula"
              className={styles.previewImage}
              src={movie?.image_still}
            />
          </Grid>

          <Grid item md={7} xs={12}>
            <div className={styles.infoContainer}>
              <div className={styles.info}>
                <h1 className={styles.movieTitle}>{movie?.title}</h1>
                <GeneralMovieInfo movie={movie} md={md} />
                <p
                  className={styles.movieDescription}
                  style={{
                    textAlign: md ? "start" : "center",
                  }}
                >
                  {movie?.large_description}
                </p>

                {movie?.extendedcommon.roles.role.map((rol) => (
                  <h3 key={rol.id}>
                    {rol.desc}:{" "}
                    {rol.talents.talent.map((tal) => (
                      <span key={tal.id} className={styles.talentName}>
                        {tal.fullname};{" "}
                      </span>
                    ))}
                  </h3>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      ¿
    </div>
  );
};

export default Movie;
