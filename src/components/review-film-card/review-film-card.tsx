import Title from '../title/title';
import FormAddReview from '../form-add-review/form-add-review';
import { useAppSelector } from '../../hooks';
import Loading from '../loading/loading';
import Header from '../header/header';


function ReviewFilmCard(): JSX.Element {
  const currentFilm = useAppSelector((state) => state.currentFilm);

  if (!currentFilm) {
    return <Loading />;
  }
  const { name, posterImage, backgroundImage, } = currentFilm;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <Title className="visually-hidden">WTW</Title>

        <Header headerType='' />

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <FormAddReview />

    </section >
  );
}

export default ReviewFilmCard;
