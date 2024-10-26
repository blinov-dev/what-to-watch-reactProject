/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Title from '../title/title';
import Player from '../player/player';
import { Film } from '../../types/film';
import { useAppDispatch } from '../../hooks';
import { setCurrentFilmAction } from '../../store/action';
type SmallFilmCardProps = {
  film: Film;
}

function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();

  const handleClickToCurrentFilm = () => {
    dispatch(setCurrentFilmAction(film));
  };

  const handleMouseEnter = () => {
    // Устанавливаем таймер при наведении мыши
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 1000);
    setHoverTimeout(timeout);
  };
  const handleMouseLeave = () => {
    setHoverTimeout(null); // Сбрасываем таймер }
    setIsHovered(false);
  };

  useEffect(() =>
    // Очищаем таймер при размонтировании компонента или изменении состояния
    () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    }, [hoverTimeout]);

  return (
    <article className={'small-film-card catalog__films-card'}
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      {isHovered === true ? (
        <Player film={film} bigPlayer={false} />
      ) : (
        <>
          <div className="small-film-card__image">
            <img src={film.previewImage} alt={film.name} width="280" height="175" />
          </div>
          <Title tag="h3" className='small-film-card__title'>
            <Link className="small-film-card__link" to={`/films/${film.id}`} onClick={handleClickToCurrentFilm}>{film.name}</Link>
          </Title>
        </>
      )}
    </article>
  );
}

export default SmallFilmCard;
