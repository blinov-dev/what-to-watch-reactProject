import MainPage from '../../pages/main-page/main-page';

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
  return <MainPage filmsCount={filmsCount} filmPromoInfo={filmPromoInfo} />;
}

export default App;
