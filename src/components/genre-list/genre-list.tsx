import { loadFilmsListAction, changeGenreAction } from '../../store/action';
import { useAppSelector, useAppDispatch } from '../../hooks';


function GenreList() {
  const films = useAppSelector((state) => state.films);
  const activeGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();


  const handleGenreReset = (event: React.MouseEvent<HTMLAnchorElement>, genre: string) => {
    event.preventDefault();
    dispatch(loadFilmsListAction());
  };
  const handleGenreChange = (event: React.MouseEvent<HTMLAnchorElement>, genre: string) => {
    event.preventDefault();
    dispatch(changeGenreAction(genre));
  };


  const genresSet = new Set<string>();
  films.forEach((film) => {
    if (typeof film.genre === 'string') {
      genresSet.add(film.genre);
    }
  });
  const genresList = Array.from(genresSet);


  return (
    <ul className="catalog__genres-list">
      <li className={`catalog__genres-item ${activeGenre === 'All genres' ? 'catalog__genres-item--active' : ''}`}>
        <a href="/" className="catalog__genres-link" onClick={(event) => handleGenreReset(event, 'All genres')}>
          All genres
        </a>
      </li>
      {genresList.map((genre: string) => (
        <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <a href="/" className="catalog__genres-link" onClick={(event) => handleGenreChange(event, genre)}>
            {genre}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
