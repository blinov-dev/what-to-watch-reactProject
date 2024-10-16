import Title from '../title/title';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';

import { Film } from '../../types/film';
type FilmCardProps = {
  promoFilm: Film;
}

function PromoFilmCard({ promoFilm }: FilmCardProps): JSX.Element {
  const { name, posterImage, backgroundImage, genre, released } = promoFilm;
  const navigate = useNavigate();

  function handlePlayerButtonClick() {
    navigate(`/player/${promoFilm.id}`);
  }


  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <Title className='visually-hidden'>WTW</Title>

      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <Title tag="h2" className='film-card__title'>{name}</Title>

            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button" onClick={handlePlayerButtonClick}>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PromoFilmCard;
