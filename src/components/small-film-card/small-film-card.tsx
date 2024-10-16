import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from '../title/title';

import Player from '../player/player';

import { Film } from '../../types/film';
type SmallFilmCardProps = {
  film: Film;
}

function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHovered(true);
    }, 1000);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article className={'small-film-card catalog__films-card'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered ? (
        <Player film={film} bigPlayer={false} />
      ) : (
        <>
          <div className="small-film-card__image">
            <img src={film.previewImage} alt={film.name} width="280" height="175" />
          </div>
          <Title tag="h3" className='small-film-card__title'>
            <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.name}</Link>
          </Title>
        </>
      )}
    </article>
  );
}

export default SmallFilmCard;
