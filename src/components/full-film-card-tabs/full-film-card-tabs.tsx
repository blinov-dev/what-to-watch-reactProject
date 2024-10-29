import { useState } from 'react';
import { convertMinutesToTimeString, convertRating, convertLevelRating } from '../../utils/utils';
import UserReview from '../user-review/user-review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Loading from '../loading/loading';
import { fetchFilmCommentsAction } from '../../store/api-actions';

function FullFilmCardTabs(): JSX.Element {
  const [activeTab, setActiveTab] = useState('overview');
  const dispatch = useAppDispatch();
  const filmsComments = useAppSelector((state) => state.filmsComments);
  const currentFilm = useAppSelector((state) => state.currentFilm);

  if (!currentFilm) {
    return <Loading />;
  }

  const { id } = currentFilm;

  const handleTabClick = (tab: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveTab(tab);
    if (tab === 'reviews') {
      dispatch(fetchFilmCommentsAction({ filmId: String(id) })); // Загружаем комментарии
    }
  };

  const { rating, scoresCount, description, director, starring, runTime } = currentFilm;

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={activeTab === 'overview' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href='/' className="film-nav__link" onClick={(event) => handleTabClick('overview', event)}>Overview</a>
          </li>
          <li className={activeTab === 'details' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href='/' className="film-nav__link" onClick={(event) => handleTabClick('details', event)}>Details</a>
          </li>
          <li className={activeTab === 'reviews' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
            <a href='/' className="film-nav__link" onClick={(event) => handleTabClick('reviews', event)}>Reviews</a>
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
        <div className="film-card__reviews film-card__row">
          <div className="film-card__reviews-col">
            {filmsComments.length === 0 ? <div>Обзоров еще нет</div> : filmsComments && filmsComments.slice(0, 3).map((review) => <UserReview key={review.id} review={review} />)}
          </div>
          <div className="film-card__reviews-col">
            {filmsComments && filmsComments.slice(3, 6).map((review) => <UserReview key={review.id} review={review} />)}
          </div>
        </div>
      )}
    </div >
  );

}

export default FullFilmCardTabs;

