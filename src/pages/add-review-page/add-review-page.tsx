import MoviePlayer from '../../components/movie-player/movie-player';
import ReviewFilmCard from '../../components/review-film-card/review-film-card';
import { useAppSelector } from '../../hooks';


function AddReviewPage(): JSX.Element {

  const currentFilm = useAppSelector((state) => state.currentFilm);

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
