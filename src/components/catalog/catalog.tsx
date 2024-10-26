import Title from '../../components/title/title';
import GenreList from '../../components/genre-list/genre-list';
import CatalogFilmList from '../catalog-film-list/catalog-film-list';
import CatalogMoreButton from '../catalog-more-button/catalog-more-button';

import { useAppDispatch } from '../../hooks';
import { showMoreFilmsAction } from '../../store/action';

type CatalogProps = {
  catalogType: string;
}


function Catalog({ catalogType }: CatalogProps): JSX.Element {

  const dispatch = useAppDispatch();

  const handleShowMore = () => {
    dispatch(showMoreFilmsAction(8));
  };

  if (catalogType === 'moviePage') {
    return (
      <section className="catalog  catalog--like-this">
        <Title tag='h2' className={'catalog__title'}>More like this</Title>

        <CatalogFilmList catalogType={'moviePage'} />

        <CatalogMoreButton onClick={handleShowMore}>Show more</CatalogMoreButton>
      </section>
    );
  }
  else {
    return (
      <section className="catalog">
        <Title tag='h2' className={'catalog__title visually-hidden'}>Catalog</Title>

        <GenreList />

        <CatalogFilmList catalogType={''} />

        <CatalogMoreButton onClick={handleShowMore}>Show more</CatalogMoreButton>
      </section>
    );
  }
}

export default Catalog;
