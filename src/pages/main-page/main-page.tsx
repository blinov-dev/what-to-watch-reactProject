import MoviePlayer from '../../components/movie-player/movie-player';
import FilmCard from '../../components/film-card/film-card';
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

      <FilmCard filmPromoInfo={filmPromoInfo} />

      <PageContent filmsCount={filmsCount} />
    </>
  );
}

export default MainPage;
