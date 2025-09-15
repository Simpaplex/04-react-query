import css from './movieGridItem.module.css'
import type { Movie } from "../../types/movie"
import DefaultImage from '../DefaultImage/DefaultImage';

interface MovieGridItemProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
}

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieGridItem({movie, onSelect}: MovieGridItemProps) {
  return (
    <li onClick={() => onSelect(movie)}>
      <div className={css.card}>
        {movie.backdrop_path ? (
          <img
            className={css.image}
            src={`${BASE_IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
        ) : (
          <DefaultImage />
        )}
        <h2 className={css.title}>{movie.title}</h2>
      </div>
    </li>
  );
}

export default MovieGridItem;