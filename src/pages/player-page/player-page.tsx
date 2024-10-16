import MoviePlayer from '../../components/movie-player/movie-player';
import Player from '../../components/player/player';

import { useParams } from 'react-router-dom';

import { Film } from '../../types/film';
type PlayerPageProps = {
  films: Array<Film>;
  promoFilm: Film;
}


function PlayerPage({ films, promoFilm }: PlayerPageProps): JSX.Element {

  const { id } = useParams();

  if (Number(id) === promoFilm.id) {
    return (
      <>
        <MoviePlayer />
        {promoFilm && (
          <Player film={promoFilm} bigPlayer />
        )}
      </>
    );
  } else {
    const currentFilm = films.find((film) => film.id === Number(id));
    return (
      <>
        <MoviePlayer />
        {currentFilm && (
          <Player film={currentFilm} bigPlayer />
        )}
      </>
    );
  }
}

export default PlayerPage;
