import { MovieDetailType } from "../../types/MovieDetailType";
import styles from "./GeneralMovieInfo.module.css";

type Props = {
  movie: MovieDetailType | null;
  md: boolean;
};

const GeneralMovieInfo = ({ movie, md }: Props) => {
  return (
    <>
      {md ? (
        <div className={styles.generalMovieInfoMD}>
          <h3>{movie?.extendedcommon.media.originaltitle}</h3>

          <span className={styles.marginH}>|</span>
          {movie?.extendedcommon.genres.genre.map((gen, i) => (
            <p key={gen.id}>
              {gen.desc}
              {`${i < movie.extendedcommon.genres.genre.length - 1 ? "," : ""}`}
            </p>
          ))}

          <span className={styles.marginH}>|</span>
          <p>{movie?.extendedcommon.media.publishyear}</p>

          <span className={styles.marginH}>|</span>
          <p>{movie?.extendedcommon.media.rating.code}</p>

          <span className={styles.marginH}>|</span>
          <p>{movie?.extendedcommon.media.duration}</p>
        </div>
      ) : (
        <div className={styles.generalMovieInfoXS}>
          <h3>{movie?.extendedcommon.media.originaltitle}</h3>

          <div className={styles.flexCentered}>
            {movie?.extendedcommon.genres.genre.map((gen, i) => (
              <p key={gen.id} className={styles.marginXS}>
                {gen.desc}
                {`${
                  i < movie.extendedcommon.genres.genre.length - 1 ? "," : ""
                }`}
              </p>
            ))}
          </div>

          <div className={styles.flexCentered}>
            <p className={styles.marginXS}>
              {movie?.extendedcommon.media.publishyear}
            </p>
            <span className={styles.marginH}>|</span>

            <p className={styles.marginXS}>
              {movie?.extendedcommon.media.rating.code}
            </p>
            <span className={styles.marginH}>|</span>

            <p className={styles.marginXS}>
              {movie?.extendedcommon.media.duration}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GeneralMovieInfo;
