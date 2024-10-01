import Title from '../../components/title/title';
import GenreList from '../../components/genre-list/genre-list';
import CatalogFilmList from '../catalog-film-list/catalog-film-list';
import CatalogMoreButton from '../catalog-more-button/catalog-more-button';


type ContentProps = {
  filmsCount: number;
}


function Catalog({ filmsCount }: ContentProps): JSX.Element {
  return (
    <section className="catalog">
      <Title className={'catalog__title visually-hidden'}>Catalog</Title>

      <GenreList />

      <CatalogFilmList filmsCount={filmsCount} />

      <CatalogMoreButton>Show more</CatalogMoreButton>
    </section>
  );
}

export default Catalog;
