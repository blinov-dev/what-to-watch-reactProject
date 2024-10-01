import Title from '../title/title';

type FilmCardInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}
type FilmCardInfoProps = {
  filmPromoInfo: FilmCardInfo;
}


function FilmCardMainInfo({ filmPromoInfo }: FilmCardInfoProps): JSX.Element {
  const { titlePromo, genrePromo, yearPromo } = filmPromoInfo;
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <Title tag={'h2'} className="film-card__title">{titlePromo}</Title>
          <p className="film-card__meta">
            <span className="film-card__genre">{genrePromo}</span>
            <span className="film-card__year">{yearPromo}</span>
          </p>

          <div className="film-card__buttons">
            <button
              className="btn btn--play film-card__button"
              type="button"
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button
              className="btn btn--list film-card__button"
              type="button"
            >
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmCardMainInfo;
