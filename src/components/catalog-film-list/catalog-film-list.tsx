import SmallFilmCard from '../../components/small-film-card/small-film-card';

import { Film } from '../../types/film';
type CatalogFilmListProps = {
  films: Array<Film>;
}


function CatalogFilmList({ films }: CatalogFilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <SmallFilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}


export default CatalogFilmList;
