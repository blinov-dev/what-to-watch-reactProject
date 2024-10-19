import Title from '../../components/title/title';
import GenreList from '../../components/genre-list/genre-list';
import CatalogFilmList from '../catalog-film-list/catalog-film-list';
import CatalogMoreButton from '../catalog-more-button/catalog-more-button';


import { Film } from '../../types/film';
type CatalogProps = {
  films: Array<Film>;
  catalogType: string;
}


function Catalog({ films, catalogType }: CatalogProps): JSX.Element {
  if (catalogType === 'moviePage') {
    return (
      <section className="catalog  catalog--like-this">
        <Title tag='h2' className={'catalog__title'}>More like this</Title>

        <CatalogFilmList films={films} />
      </section>
    );
  }
  else {
    return (
      <section className="catalog">
        <Title tag='h2' className={'catalog__title visually-hidden'}>Catalog</Title>

        <GenreList />

        <CatalogFilmList films={films} />

        <CatalogMoreButton>Show more</CatalogMoreButton>
      </section>
    );
  }
}

export default Catalog;
