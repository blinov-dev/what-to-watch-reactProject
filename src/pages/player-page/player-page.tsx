import { useParams } from 'react-router-dom';
import MoviePlayer from '../../components/movie-player/movie-player';
import Player from '../../components/player/player';
import { useAppSelector } from '../../hooks';

function PlayerPage(): JSX.Element {

  const currentFilm = useAppSelector((state) => state.currentFilm);
  const promoFilm = useAppSelector((state) => state.promoFilm);

  const { id } = useParams();

  if (promoFilm && Number(id) === promoFilm.id) {
    return (
      <>
        <MoviePlayer />
        {promoFilm && (
          <Player film={promoFilm} bigPlayer />
        )}
      </>
    );
  } else {
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
