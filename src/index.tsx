import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const FILM_COUNT = 20;

type FilmPromoInfo = {
  titlePromo: string;
  genrePromo: string;
  yearPromo: string;
}

const FILM_PROMO_INFO: FilmPromoInfo = {
  titlePromo: 'The Grand Budapest Hotel',
  genrePromo: 'Drama',
  yearPromo: '2014',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmsCount={FILM_COUNT} filmPromoInfo={FILM_PROMO_INFO} />
  </React.StrictMode>,
);
