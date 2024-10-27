/* eslint-disable no-console */
import Title from '../title/title';
import Header from '../header/header';
import Loading from '../loading/loading';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import ButtonMyList from '../button-my-list/button-my-list';
import { useDispatch } from 'react-redux';
import { fetchAddFilmInFavoriteAction } from '../../store/api-actions';


function PromoFilmCard(): JSX.Element {

  const promoFilm = useAppSelector((state) => state.promoFilm);

  // const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useDispatch();

  const handleAddToMyList = () => {
    if (promoFilm) {
      const filmId = promoFilm.id.toString();
      const status = promoFilm.isFavorite === false ? 1 : 0;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      dispatch(fetchAddFilmInFavoriteAction({ filmId, status }) as any);
      navigate('/my-list');
    }
  };

  const navigate = useNavigate();

  function handlePlayerButtonClick() {
    if (promoFilm) {
      navigate(`/player/${promoFilm.id}`);
    }
    return <Loading />;
  }

  // function handleMyListButtonClick() {
  //   if (authorizationStatus === 'AUTH') {
  //     navigate('/my-list');
  //   } else {
  //     navigate('/login');
  //   }
  // }

  if (!promoFilm) {
    return <Loading />;
  }

  const { name, backgroundImage, posterImage, genre, released } = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <Title className='visually-hidden'>WTW</Title>

      <Header headerType={''} />

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
              <ButtonMyList onClick={handleAddToMyList} />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
export default PromoFilmCard;
