import { BrowserRouter, Routes, Route } from 'react-router-dom';
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


type FilmPromoInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}

type AppProps = {
  filmsCount: number;
  filmPromoInfo: FilmPromoInfo;
}

function App({ filmsCount, filmPromoInfo }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage filmsCount={filmsCount} filmPromoInfo={filmPromoInfo} />} />
        <Route path="/login" element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path="/films/:id" element={<MoviePage filmsCount={filmsCount} filmPromoInfo={filmPromoInfo} />} />
        <Route path="/add-review/:id/review" element={<AddReviewPage />} />
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
