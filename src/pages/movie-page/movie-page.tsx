import MoviePlayer from '../../components/movie-player/movie-player';
import PageContent from '../../components/page-content/page-content';
import FullFilmCard from '../../components/full-film-card/full-film-card';
import { useAppDispatch, useAppSelector } from '../../hooks';


import { useEffect } from 'react';
import { changeGenreAction, loadCurrentFilmAction } from '../../store/action';
import { fetchSimilarFilmsAction } from '../../store/api-actions';
import { useNavigate, useParams } from 'react-router-dom';


function MoviePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const films = useAppSelector((state) => state.films);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && films.length > 0) {
      const filmToSet = films.find((film) => film.id === Number(id));
      if (filmToSet) {
        dispatch(loadCurrentFilmAction(filmToSet));
      } else {
        navigate('*');
      }
    }
  }, [id, dispatch, films, navigate]);

  useEffect(() => {
    if (currentFilm) {
      dispatch(fetchSimilarFilmsAction(String(currentFilm.id)));
      dispatch(changeGenreAction(currentFilm.genre));
    }
  }, [currentFilm, dispatch]);

  return (
    <>
      <MoviePlayer />
      {currentFilm && (
        <FullFilmCard key={currentFilm.id} />
      )}
      <PageContent catalogType='moviePage' />
    </>
  );
}

export default MoviePage;
