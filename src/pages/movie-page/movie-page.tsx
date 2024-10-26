
import MoviePlayer from '../../components/movie-player/movie-player';
import PageContent from '../../components/page-content/page-content';
import FullFilmCard from '../../components/full-film-card/full-film-card';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

import { Review } from '../../types/review';

type MoviePageProps = {
  reviews: Array<Review>;
}


function MoviePage({ reviews }: MoviePageProps) {

  const films = useAppSelector((state) => state.films);
  const { id } = useParams();

  const currentFilm = id ? films.find((film) => film.id === Number(id)) : null;

  return (
    <>
      <MoviePlayer />
      {currentFilm && (
        <FullFilmCard key={currentFilm.id} film={currentFilm} reviews={reviews} />
      )}
      <PageContent catalogType='moviePage' />
    </>
  );
}

export default MoviePage;
