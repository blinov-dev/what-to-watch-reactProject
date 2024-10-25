import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { fetchFilmsAction } from './store/api-actions';

import App from './components/app/app';

import { FILMS } from './mocks/films';
import { REVIEWS } from './mocks/reviews';
import { PROMO_FILM } from './mocks/promo-film';

store.dispatch(fetchFilmsAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={FILMS} promoFilm={PROMO_FILM} reviews={REVIEWS} />
    </Provider>
  </React.StrictMode>
);


// Надо убрать все mock и переписать на запрос к серверу
