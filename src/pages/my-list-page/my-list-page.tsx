/* eslint-disable no-console */
import MoviePlayer from '../../components/movie-player/movie-player';
import Title from '../../components/title/title';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavoriteFilmsAction } from '../../store/api-actions';

function MyListPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector((state) => state.favoriteFilms);

  useEffect(() => {

    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);


  return (
    <>
      <MoviePlayer />
      <div className="user-page">
        <Header headerType={'my-list'} />
        <section className="catalog">
          <Title tag="h2" className="catalog__title visually-hidden">Catalog</Title>

          <div className="catalog__films-list">
            {favoriteFilms &&
              favoriteFilms.map((film) => {
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

