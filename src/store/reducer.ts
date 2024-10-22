import { createReducer } from '@reduxjs/toolkit';
import { FILMS } from '../mocks/films';
import { PROMO_FILM } from '../mocks/promo-film';
import { loadFilmsListAction, changeGenreAction } from './action';

export const initialState = {
  films: FILMS,
  genre: 'All genres',
  promoFilm: PROMO_FILM,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder.addCase(loadFilmsListAction, (state) => {
    state.films = FILMS;
    state.genre = 'All genres';
  });
  builder.addCase(changeGenreAction, (state, action) => {
    state.films = FILMS;
    state.genre = action.payload;
  });
});
