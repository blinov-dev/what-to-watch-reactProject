import MoviePlayer from '../../components/movie-player/movie-player';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Title from '../../components/title/title';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import Footer from '../../components/footer/footer';

import { Film } from '../../types/film';
type MyListProps = {
  films: Array<Film>;
}

function MyListPage({ films }: MyListProps): JSX.Element {
  return (
    <>
      <MoviePlayer />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo light={false} />

          <Title className="page-title user-page__title">My list</Title>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/login" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <section className="catalog">
          <Title tag="h2" className="catalog__title visually-hidden">Catalog</Title>

          <div className="catalog__films-list">
            {films &&
              films.map((film) => {
                if (film.isFavorite === true) {
                  return <SmallFilmCard key={film.id} film={film} />;
                }
                return null;
              })}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default MyListPage;
