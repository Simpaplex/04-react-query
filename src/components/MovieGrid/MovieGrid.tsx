import type { Movie } from '../../types/movie';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import css from './MovieGrid.module.css';

interface MoveGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}


function MoveGrid({ movies, onSelect}: MoveGridProps) {
  return (
    <ul className={css.grid}>
      {movies.map(item => (
        <MovieGridItem movie={item} key={item.id} onSelect={onSelect} />
      ))}
    </ul>
  );
}

export default MoveGrid;
