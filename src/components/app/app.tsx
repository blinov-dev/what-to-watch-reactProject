import { Routes, Route, } from 'react-router-dom';
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


import Loading from '../loading/loading';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../browser-history';

function App(): JSX.Element {

  const films1 = useAppSelector((state) => state.films);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown && films1.length === 0) {
    return (
      <Loading />
    );
  }

  return (
    // <BrowserRouter>
    <HistoryRouter history={browserHistory}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path="/films/:id" element={<MoviePage />} />
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path="/player/:id" element={<PlayerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;

