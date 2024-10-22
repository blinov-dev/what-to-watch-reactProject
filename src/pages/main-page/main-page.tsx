import MoviePlayer from '../../components/movie-player/movie-player';
import PageContent from '../../components/page-content/page-content';
import FilmCard from '../../components/promo-film-card/promo-film-card';


import { Film } from '../../types/film';
type MainProps = {
  promoFilm: Film;
}


function MainPage({ promoFilm }: MainProps): JSX.Element {
  return (
    <>
      <MoviePlayer />

      <FilmCard promoFilm={promoFilm} />

      <PageContent catalogType='mainPage' />
    </>
  );
}

export default MainPage;
