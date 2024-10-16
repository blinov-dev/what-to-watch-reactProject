
import Title from '../../components/title/title';
import Header from '../header/header';
import { Link, useNavigate } from 'react-router-dom';
import FullFilmCardTabs from '../full-film-card-tabs/full-film-card-tabs';

import { Review } from '../../types/review';
import { Film } from '../../types/film';
type FullFilmCardProps = {
  film: Film;
  reviews: Array<Review>;
}

function FullFilmCard({ film, reviews }: FullFilmCardProps): JSX.Element {

  const navigate = useNavigate();

  function handlePlayerButtonClick() {
    navigate(`/player/${film.id}`);
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <Title className="visually-hidden">WTW</Title>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <Title tag='h2' className="film-card__title">{film.name}</Title>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
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
              <Link to="review" className="btn film-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>

          <FullFilmCardTabs film={film} reviews={reviews} />
        </div>
      </div>
    </section>
  );
}

export default FullFilmCard;
