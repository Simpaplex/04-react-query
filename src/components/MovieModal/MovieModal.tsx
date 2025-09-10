import { useEffect } from "react";
import type { Movie } from "../../types/movie";
import css from "./MovieModal.module.css"

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const BASE_ORIGINAL_IMAGE_URL = 'https://image.tmdb.org/t/p/original';

function MovieModal({ movie, onClose }: MovieModalProps) {
  
useEffect(() => {
  function handleEscapePress (event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', handleEscapePress);

  return () => {
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleEscapePress);
  };
}, [onClose]);

function handleOverlayClick (event: React.MouseEvent<HTMLDivElement>) {
  if (event.target === event.currentTarget) {
    onClose();
  }
};




  return (
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleOverlayClick}>
      <div className={css.modal}>
        <button
          className={css.closeButton}
          aria-label="Close modal"
          onClick={onClose}>
          &times;
        </button>
        {movie.backdrop_path ?
          <img
            src={`${BASE_ORIGINAL_IMAGE_URL}${movie.backdrop_path}`}
            alt={movie.title}
            className={css.image}
          /> : <p>NO IMAGE</p>}
        <div className={css.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}/10
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;