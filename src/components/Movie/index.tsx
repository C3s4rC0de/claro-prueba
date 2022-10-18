import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetMovieDetail from "../../hooks/useGetMovieDetail";

type Props = {};

const Movie = (props: Props) => {
  const { id } = useParams();

  const { movie, getMovie } = useGetMovieDetail();

  useEffect(() => {
    getMovie(id as string);
  }, [id]);

  return (
    <div style={{ color: "#FFF" }}>
      <h1>{movie?.title}</h1>

      <p>{movie?.large_description}</p>

      {movie?.extendedcommon.genres.genre.map((gen) => (
        <p>{gen.desc},</p>
      ))}

      <p>{movie?.extendedcommon.media.publishyear}</p>
      <p>{movie?.extendedcommon.media.duration}</p>
      <p>{movie?.extendedcommon.media.rating.code}</p>
      <p>{movie?.extendedcommon.media.rating.desc}</p>
      <p>Título original {movie?.extendedcommon.media.originaltitle}</p>
      <p>
        Título original{" "}
        {movie?.extendedcommon.roles.role.map((rol) => (
          <h3>
            {rol.desc}:{" "}
            {rol.talents.talent.map((tal) => (
              <span>{tal.fullname}; </span>
            ))}
          </h3>
        ))}
      </p>

      <img
        alt="fondo-pelicula"
        src={movie?.image_still}
        width={"700px"}
        height="100%"
      />
    </div>
  );
};

export default Movie;
