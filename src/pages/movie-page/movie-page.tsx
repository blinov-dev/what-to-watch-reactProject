
import MoviePlayer from '../../components/movie-player/movie-player';
import PageContent from '../../components/page-content/page-content';
import FullFilmCard from '../../components/full-film-card/full-film-card';

import { useParams } from 'react-router-dom';


import { Film } from '../../types/film';
import { Review } from '../../types/review';
type MoviePageProps = {
  films: Array<Film>;
  reviews: Array<Review>;
}


function MoviePage({ films, reviews }: MoviePageProps) {

  const { id } = useParams();

  const currentFilm = id ? films.find((film) => film.id === Number(id)) : null;


  let selectedCategory: string | undefined;
  if (currentFilm) {
    selectedCategory = currentFilm.genre;
  } else {
    selectedCategory = undefined;
  }
  const filteredFilmsByGenre = selectedCategory ? films.filter((film) => film.genre === selectedCategory) : [];

  return (
    <>
      <MoviePlayer />
      {currentFilm && (
        <FullFilmCard key={currentFilm.id} film={currentFilm} reviews={reviews} />
      )}
      <PageContent films={filteredFilmsByGenre} catalogType='moviePage' />
    </>
  );
}

export default MoviePage;
