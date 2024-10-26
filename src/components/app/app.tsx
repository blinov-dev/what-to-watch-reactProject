import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ScrollToTop from '../scroll-to-top/scroll-to-top';

import { AppRoute, AuthorizationStatus } from '../../const/const';
import PrivateRoute from '../private-route/private-route';

import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReviewPage from '../../pages/add-review-page/add-review-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import MyListPage from '../../pages/my-list-page/my-list-page';
import PlayerPage from '../../pages/player-page/player-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import { Film } from '../../types/film';
import { Review } from '../../types/review';
type AppProps = {
  films: Array<Film>;
  promoFilm: Film;
  reviews: Array<Review>;
}


function App({ films, promoFilm, reviews }: AppProps): JSX.Element {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <MyListPage films={films} />
            </PrivateRoute>
          }
        />
        <Route path="/films/:id" element={<MoviePage reviews={reviews} />} />
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <AddReviewPage films={films} />
            </PrivateRoute>
          }
        />
        <Route path="/player/:id" element={<PlayerPage films={films} promoFilm={promoFilm} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
