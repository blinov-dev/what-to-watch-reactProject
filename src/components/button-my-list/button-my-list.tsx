import { useAppSelector } from '../../hooks';

type ButtonMyListProps = {
  onClick: () => void;
}


function ButtonMyList({ onClick }: ButtonMyListProps): JSX.Element {
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  return (
    <button className="btn btn--list film-card__button" type="button" onClick={onClick}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>{favoriteFilms.length > 0 ? 'To Watch' : 'My list'}</span>
    </button>
  );
}
export default ButtonMyList;
