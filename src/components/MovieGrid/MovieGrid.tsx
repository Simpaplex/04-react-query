import type { Movie } from '../../types/movie';
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
            <img
              className={css.image}
              src={el.backdrop_path?`${BASE_IMAGE_URL}${el.backdrop_path}`:'/public/film.svg'}
              alt={el.title}
              loading="lazy"
            />
            <h2 className={css.title}>{el.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MoveGrid;
