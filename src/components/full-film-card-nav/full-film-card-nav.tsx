type FullFilmCardNavProps = {
  isActiveTab: string;
}


function FullFilmCardNav({ isActiveTab }: FullFilmCardNavProps): JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className={isActiveTab === 'one' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <a href="/" className="film-nav__link">Overview</a>
        </li>
        <li className={isActiveTab === 'two' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <a href="/" className="film-nav__link">Details</a>
        </li>
        <li className={isActiveTab === 'three' ? 'film-nav__item film-nav__item--active' : 'film-nav__item'}>
          <a href="/" className="film-nav__link">Reviews</a>
        </li>
      </ul>
    </nav>
  );
}

export default FullFilmCardNav;
