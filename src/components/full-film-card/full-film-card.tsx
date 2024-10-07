import FilmCardBg from '../film-card-bg/film-card-bg';
import Header from '../header/header';
import Title from '../title/title';
import FilmCardDesc from '../film-card-desc/film-card-desc';
import FullFilmCardNav from '../full-film-card-nav/full-film-card-nav';
import FullFilmCardText from '../full-film-card-text/full-film-card-text';

type FilmPromoInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}


type FullFilmCardProps = {
  filmPromoInfo: FilmPromoInfo;
}

function FullFilmCard({ filmPromoInfo }: FullFilmCardProps):
  JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <FilmCardBg />

        <Title className='visually-hidden'>WTW</Title>

        <Header />

        <div className="film-card__wrap">
          <FilmCardDesc filmPromoInfo={filmPromoInfo} addReviewButton />
        </div>
      </div>

      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <FullFilmCardNav isActiveTab="two" />

            <FullFilmCardText />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FullFilmCard;
