import { useState } from 'react';
import { convertMinutesToTimeString, convertRating, convertLevelRating } from '../../utils/utils';
import { Film } from '../../types/film';
import { Review } from '../../types/review';
type FullFilmCardTabsProps = {
  film: Film;
  reviews: Array<Review>;
}


function FullFilmCardTabs(film: FullFilmCardTabsProps, reviews: FullFilmCardTabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');
  const handleTabClick = (tab: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveTab(tab);
  };

  const { rating, scoresCount, description, director, starring, runTime } = film.film;

  // eslint-disable-next-line no-console
  console.log(reviews);


  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href='#' className="film-nav__link" onClick={(event) => handleTabClick('overview', event)}>Overview</a>
          </li>
          <li className={activeTab === 'details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href='#' className="film-nav__link" onClick={(event) => handleTabClick('details', event)}>Details</a>
          </li>
          <li className={activeTab === 'reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href='#' className="film-nav__link" onClick={(event) => handleTabClick('reviews', event)}>Reviews</a>
          </li>
        </ul>
      </nav>

      {activeTab === 'overview' && (
        <>
          <div className="film-rating">
            <div className="film-rating__score">{convertRating(rating)}</div>
            <p className="film-rating__meta">
              <span className="film-rating__level">{convertLevelRating(rating)}</span>
              <span className="film-rating__count">{scoresCount}</span>
            </p>
          </div>

          <div className="film-card__text">
            {description}

            <p className="film-card__director"><strong>{director}</strong></p>

            <p className="film-card__starring"><strong>{starring}</strong></p>
          </div>
        </>)}

      {activeTab === 'details' && (
        <div className="film-card__text film-card__row">
          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Director</strong>
              <span className="film-card__details-value">{director}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Starring</strong>
              <span className="film-card__details-value">{starring}</span>
            </p>
          </div>

          <div className="film-card__text-col">
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Run Time</strong>
              <span className="film-card__details-value">{convertMinutesToTimeString(runTime)}</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Genre</strong>
              <span className="film-card__details-value">Comedy</span>
            </p>
            <p className="film-card__details-item">
              <strong className="film-card__details-name">Released</strong>
              <span className="film-card__details-value">2014</span>
            </p>
          </div>
        </div>
      )}
      {activeTab === 'reviews' && (

        <div>Reviews</div>
      )}
    </div >
  );

}

export default FullFilmCardTabs;

