import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeGenreAction, setFilteredFilmsAction, loadStartPageAction } from '../../store/action';


function CatalogFilmList(): JSX.Element {

  const films = useAppSelector((state) => state.films);
  const activeGenre = useAppSelector((state) => state.genre);
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const filteredFilms = useAppSelector((state) => state.filteredFilms);
  const dispatch = useAppDispatch();


  useEffect(() => {
    // Сбрасываем состояние при переходе на страницу
    dispatch(loadStartPageAction());
  }, [dispatch]);

  const displayedFilms = films.slice(0, filmsCount);

  const { id } = useParams();
  const currentFilm = id ? films.find((film) => film.id === Number(id)) : null;
  useEffect(() => {
    if (currentFilm) {
      dispatch(changeGenreAction(currentFilm.genre));
    }
  }, [currentFilm, dispatch]);

  useEffect(() => {
    const filtered = displayedFilms.filter((film) => {
      const isSameGenre = activeGenre === 'All genres' || film.genre === activeGenre;
      return isSameGenre && film.id !== (currentFilm ? currentFilm.id : null);
    });

    if (filtered.length !== filteredFilms.length || !filtered.every((film, index) => film.id === filteredFilms[index]?.id)) {
      dispatch(setFilteredFilmsAction(filtered));
    }
  }, [activeGenre, displayedFilms, currentFilm, dispatch, filteredFilms]);

  return (
    <div className="catalog__films-list">
      {filteredFilms.map((film) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}


export default CatalogFilmList;
