/* eslint-disable no-console */

import MoviePlayer from '../../components/movie-player/movie-player';
import PageContent from '../../components/page-content/page-content';
import FullFilmCard from '../../components/full-film-card/full-film-card';

// import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Review } from '../../types/review';
import { useEffect } from 'react';
import { changeGenreAction, setCurrentFilmAction } from '../../store/action';
import { fetchSimilarFilmsAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';

type MoviePageProps = {
  reviews: Array<Review>;
}


function MoviePage({ reviews }: MoviePageProps) {
  const { id } = useParams<{ id: string }>(); // Получаем id из URL
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const films = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      const filmToSet = films.find((film) => film.id === Number(id));
      if (filmToSet) {
        dispatch(setCurrentFilmAction(filmToSet)); // Устанавливаем текущий фильм
      }
    }
  }, [id, dispatch, films]);

  useEffect(() => {
    if (currentFilm) {
      dispatch(fetchSimilarFilmsAction(String(currentFilm.id)));
      dispatch(changeGenreAction(currentFilm.genre));
    }
  }, [currentFilm, dispatch]);

  // const { id } = useParams();

  // const currentFilm = id ? films.find((film) => film.id === Number(id)) : null;

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
