import MoviePlayer from '../../components/movie-player/movie-player';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import PageContent from '../../components/page-content/page-content';


type FilmPromoInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}

type MainProps = {
  filmsCount: number;
  filmPromoInfo: FilmPromoInfo;
}

function MainPage({ filmsCount, filmPromoInfo }: MainProps): JSX.Element {

  return (
    <>
      <MoviePlayer />

      <PromoFilmCard filmPromoInfo={filmPromoInfo} />

      <PageContent filmsCount={filmsCount} />
    </>
  );
}

export default MainPage;
