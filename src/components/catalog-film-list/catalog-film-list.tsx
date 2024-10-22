import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import SmallFilmCard from '../../components/small-film-card/small-film-card';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeGenreAction } from '../../store/action';


function CatalogFilmList(): JSX.Element {

  const films = useAppSelector((state) => state.films);
  const activeGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const currentFilm = id ? films.find((film) => film.id === Number(id)) : null;

  useEffect(() => {
    if (currentFilm) {
      dispatch(changeGenreAction(currentFilm.genre));
    }
  }, [currentFilm, dispatch]);
  // Фильтруем фильмы по активному жанру, исключая текущий фильм
  const filteredFilms = films.filter((film) => {
    const isSameGenre = activeGenre === 'All genres' || film.genre === activeGenre;
    return isSameGenre && film.id !== (currentFilm ? currentFilm.id : null);
  });

  return (
    <div className="catalog__films-list">
      {filteredFilms.map((film) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}


export default CatalogFilmList;
