import Title from '../../components/title/title';
import GenreList from '../../components/genre-list/genre-list';
import CatalogFilmList from '../catalog-film-list/catalog-film-list';
import CatalogMoreButton from '../catalog-more-button/catalog-more-button';


import { Film } from '../../types/film';
type CatalogProps = {
  films: Array<Film>;
}


function Catalog({ films }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <Title tag='h2' className={'catalog__title visually-hidden'}>Catalog</Title>

      <GenreList />

      <CatalogFilmList films={films} />

      <CatalogMoreButton>Show more</CatalogMoreButton>
    </section>
  );
}

export default Catalog;
