import { useAppSelector } from '../../hooks';


type CatalogMoreButtonProps = {
  children: string;
  onClick: () => void;
}


function CatalogMoreButton({ children, onClick }: CatalogMoreButtonProps): JSX.Element {

  const filteredFilms = useAppSelector((state) => state.filteredFilms);
  const filmsCount = useAppSelector((state) => state.filmsCount);

  function showMoreButtonClass(): string {
    if (filteredFilms.length < filmsCount) {
      return 'visually-hidden';
    } else {
      return 'catalog__more';
    }
  }

  return (
    <div className={showMoreButtonClass()}>
      <button className="catalog__button" type="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default CatalogMoreButton;
