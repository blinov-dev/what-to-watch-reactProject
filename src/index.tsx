import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { fetchFilmsAction, fetchPromoFilmAction, checkAuthAction } from './store/api-actions';

import App from './components/app/app';
import { FILMS } from './mocks/films';
import { PROMO_FILM } from './mocks/promo-film';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App films={FILMS} promoFilm={PROMO_FILM} />
    </Provider>
  </React.StrictMode>
);

