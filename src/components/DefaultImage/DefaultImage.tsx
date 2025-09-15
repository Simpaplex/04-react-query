import css from './DefaultImage.module.css';

function DefaultImage() {
  return (
    <div className={css.default_image}>
      <img className={css.default_image_icon} src="/film.svg" alt="No poster" />
      <h2 className={css.default_image_title}>No poster</h2>
    </div>
  );
}

export default DefaultImage;
