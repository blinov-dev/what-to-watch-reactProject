import MoviePlayer from '../../components/movie-player/movie-player';
import PageContent from '../../components/page-content/page-content';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';


function MainPage(): JSX.Element {
  return (
    <>
      <MoviePlayer />

      <PromoFilmCard />

      <PageContent catalogType='mainPage' />
    </>
  );
}

export default MainPage;
