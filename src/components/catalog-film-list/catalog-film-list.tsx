/* eslint-disable no-console */
import { useEffect } from 'react';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeGenreAction, setFilteredFilmsAction, } from '../../store/action';
import { fetchSimilarFilmsAction } from '../../store/api-actions';


type CatalogFilmListProps = {
  catalogType: string;
}

function CatalogFilmList({ catalogType }: CatalogFilmListProps): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const activeGenre = useAppSelector((state) => state.genre);
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const filteredFilms = useAppSelector((state) => state.filteredFilms);
  const currentFilm = useAppSelector((state) => state.currentFilm);
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const dispatch = useAppDispatch();

  const filteredByGenre = films.filter((film) => activeGenre === 'All genres' || film.genre === activeGenre);
  const displayedFilms = filteredByGenre.slice(0, filmsCount);

  useEffect(() => {
    if (currentFilm) {
      dispatch(fetchSimilarFilmsAction(String(currentFilm.id)));
      dispatch(changeGenreAction(currentFilm.genre));
    }
  }, [currentFilm, dispatch]);

  useEffect(() => {
    if (filteredByGenre.length !== filteredFilms.length || !filteredByGenre.every((film, index) => film.id === filteredFilms[index]?.id)) {
      dispatch(setFilteredFilmsAction(filteredByGenre));
    }
  }, [activeGenre, filteredByGenre, currentFilm, dispatch, filteredFilms]);

  const filteredSimilarFilms = similarFilms.filter((film) => film.id !== (currentFilm ? currentFilm.id : null));
  const filmsToRender = catalogType === 'moviePage' ? filteredSimilarFilms : displayedFilms;

  return (
    <div className="catalog__films-list">
      {filmsToRender.map((film) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}


export default CatalogFilmList;
