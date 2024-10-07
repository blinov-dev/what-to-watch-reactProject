import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Film } from '../../types/film';
type SmallFilmCardProps = {
  film: Film;
}

function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article
      className={isHovered ? 'small-film-card catalog__films-card hovered' : 'small-film-card catalog__films-card'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
