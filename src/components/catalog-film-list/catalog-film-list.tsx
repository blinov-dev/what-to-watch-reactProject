import SmallFilmCard from '../../components/small-film-card/small-film-card';

type CatalogFilmListProps = {
  filmsCount: number;
}


function CatalogFilmList({ filmsCount }: CatalogFilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {Array.from({ length: filmsCount }, (_, index) => <SmallFilmCard key={index} />)}
    </div>
  );
}


export default CatalogFilmList;
