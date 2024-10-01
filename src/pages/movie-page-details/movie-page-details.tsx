import MoviePlayer from '../../components/movie-player/movie-player';
import FullFilmCard from '../../components/full-film-card/full-film-card';
import PageContent from '../../components/page-content/page-content';

type FilmPromoInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}

type MoviePageDetailsProps = {
  filmsCount: number;
  filmPromoInfo: FilmPromoInfo;
}


function MoviePageDetails({ filmsCount, filmPromoInfo }: MoviePageDetailsProps): JSX.Element {
  return (
    <>
      <MoviePlayer />
      <FullFilmCard filmPromoInfo={filmPromoInfo} />
      <PageContent filmsCount={filmsCount} />
    </>


  );
}

export default MoviePageDetails;
