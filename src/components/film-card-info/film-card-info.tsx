import FilmCardDesc from '../film-card-desc/film-card-desc';

type FilmCardInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}
type FilmCardInfoProps = {
  filmPromoInfo: FilmCardInfo;
}


function FilmCardMainInfo({ filmPromoInfo }: FilmCardInfoProps): JSX.Element {
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

        <FilmCardDesc filmPromoInfo={filmPromoInfo} addReviewButton={false} />
      </div>
    </div>
  );
}

export default FilmCardMainInfo;
