import MoviePlayer from '../../components/movie-player/movie-player';
import FullFilmCard from '../../components/full-film-card/full-film-card';
import PageContent from '../../components/page-content/page-content';

type FilmPromoInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}

type MoviePageInListProps = {
  filmsCount: number;
  filmPromoInfo: FilmPromoInfo;
}


function MoviePageInList({ filmsCount, filmPromoInfo }: MoviePageInListProps) {
  return (
    <>
      <MoviePlayer />
      <FullFilmCard filmPromoInfo={filmPromoInfo} />
      <PageContent filmsCount={filmsCount} />
    </>
  );
}

export default MoviePageInList;
