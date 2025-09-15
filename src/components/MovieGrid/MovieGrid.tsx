import type { Movie } from '../../types/movie';
import DefaultImage from '../DefaultImage/DefaultImage';
import css from './MovieGrid.module.css';

interface MoveGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function MoveGrid({ movies, onSelect}: MoveGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(el => (
        <li key={el.id} onClick={() => onSelect(el)}>
          <div className={css.card}>
            {el.backdrop_path?<img
              className={css.image}
              src={`${BASE_IMAGE_URL}${el.poster_path}`}
              alt={el.title}
              loading="lazy"
            />:<DefaultImage/>}
            <h2 className={css.title}>{el.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MoveGrid;
