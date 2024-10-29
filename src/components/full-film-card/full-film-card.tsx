/* eslint-disable no-console */

import Title from '../../components/title/title';
import Header from '../header/header';
import { Link, useNavigate } from 'react-router-dom';
import FullFilmCardTabs from '../full-film-card-tabs/full-film-card-tabs';
import { useAppSelector } from '../../hooks';
import Loading from '../loading/loading';
import ButtonMyList from '../button-my-list/button-my-list';
import { fetchAddFilmInFavoriteAction, } from '../../store/api-actions';
import { useDispatch } from 'react-redux';

function FullFilmCard(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentFilm = useAppSelector((state) => state.currentFilm);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (!currentFilm) {
    return <Loading />;
  }

  const { name, backgroundImage, posterImage, genre, released } = currentFilm;
  function handlePlayerButtonClick() {
    if (currentFilm) {
      navigate(`/player/${currentFilm.id}`);
    } else {
      navigate('*');
    }
  }
  const handleAddToMyList = () => {
    if (currentFilm) {
      const filmId = currentFilm.id.toString();
      const status = currentFilm.isFavorite === false ? 1 : 0;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(fetchAddFilmInFavoriteAction({ filmId, status }) as any);
      navigate('/my-list');
    }
  };

  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <Title className="visually-hidden">WTW</Title>

        <Header headerType={''} />

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <Title tag='h2' className="film-card__title">{name}</Title>
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
              <ButtonMyList onClick={handleAddToMyList} />
              <Link to="review" className={authorizationStatus === 'AUTH' ? 'btn film-card__button' : 'visually-hidden'}>Add review</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <FullFilmCardTabs />
        </div>
      </div>
    </section>
  );
}

export default FullFilmCard;

