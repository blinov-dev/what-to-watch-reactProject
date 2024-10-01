// import MainPage from '../../pages/main-page/main-page';
import MoviePageDetails from '../../pages/movie-page-details/movie-page-details';
// import MoviePageInList from '../../pages/movie-page-in-list/movie-page-in-list';

type FilmPromoInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}

type AppProps = {
  filmsCount: number;
  filmPromoInfo: FilmPromoInfo;
}

function App({ filmsCount, filmPromoInfo }: AppProps): JSX.Element {
  // return <MainPage filmsCount={filmsCount} filmPromoInfo={filmPromoInfo} />;
  return <MoviePageDetails filmsCount={filmsCount} filmPromoInfo={filmPromoInfo} />;
  // return <MoviePageInList filmsCount={filmsCount} />;
}

export default App;
