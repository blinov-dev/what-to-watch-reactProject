import { createReducer } from '@reduxjs/toolkit';
import { FILMS } from '../mocks/films';
import {
  loadFilmsListAction,
  changeGenreAction,
  showMoreFilmsAction,
  setFilteredFilmsAction,
} from './action';

export const initialState = {
  films: FILMS,
  genre: 'All genres',
  filmsCount: 8,
  filteredFilms: FILMS,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder.addCase(loadFilmsListAction, () => initialState); // Сбрасываем состояние

  // builder.addCase(loadFilmsListAction, (state) => {
  //   state.films = FILMS;
  //   state.genre = 'All genres';
  //   state.filmsCount = 8;
  // });
  builder.addCase(changeGenreAction, (state, action) => {
    state.genre = action.payload;
    state.filmsCount = 8;
  });
  builder.addCase(showMoreFilmsAction, (state, action) => {
    state.filmsCount += action.payload;
  });
  builder.addCase(setFilteredFilmsAction, (state, action) => {
    state.filteredFilms = action.payload;
  });
});
