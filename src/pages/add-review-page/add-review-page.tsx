import MoviePlayer from '../../components/movie-player/movie-player';
import ReviewFilmCard from '../../components/review-film-card/review-film-card';
import { useParams } from 'react-router-dom';

import { Film } from '../../types/film';
type AddReviewPageProps = {
  films: Array<Film>;
}


function AddReviewPage({ films }: AddReviewPageProps): JSX.Element {

  const { id } = useParams();

  const currentFilm = id ? films.find((film) => film.id === Number(id)) : null;

  return (
    <>
      <MoviePlayer />
      {currentFilm && (
        <ReviewFilmCard key={currentFilm.id} film={currentFilm} />
      )}
    </>
  );
}

export default AddReviewPage;
