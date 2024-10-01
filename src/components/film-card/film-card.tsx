import FilmCardBg from '../film-card-bg/film-card-bg';
import Header from '../header/header';
import Title from '../title/title';
import FilmCardMainInfo from '../film-card-info/film-card-info';

type FilmCardInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}
type FilmCardProps = {
  filmPromoInfo: FilmCardInfo;
}


function FilmCard({ filmPromoInfo }: FilmCardProps): JSX.Element {

  return (
    <section className="film-card">
      <FilmCardBg />

      <Title className='visually-hidden'>WTW</Title>

      <Header />

      <FilmCardMainInfo filmPromoInfo={filmPromoInfo} />
    </section>
  );
}

export default FilmCard;
