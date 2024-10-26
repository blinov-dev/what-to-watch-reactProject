import { createReducer } from '@reduxjs/toolkit';
import { Films, Film } from '../types/film';
import {
  loadFilmsAction,
  loadAllGenresFilmsAction,
  changeGenreAction,
  showMoreFilmsAction,
  setFilteredFilmsAction,
  requireAuthorizationAction,
  loadPromoFilmAction,
  setCurrentFilmAction,
  loadSimilarFilmsAction,
  resetStateAction,
} from './action';

import { AuthorizationStatus } from '../const/const';

type InitialState = {
  films: Films;
  genre: string;
  filmsCount: number;
  filteredFilms: Films;
  authorizationStatus: AuthorizationStatus;
  promoFilm: Film | null;
  currentFilm: Film | null;
  similarFilms: Films;
};

export const initialState: InitialState = {
  films: [],
  genre: 'All genres',
  filmsCount: 8,
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  promoFilm: null,
  currentFilm: null,
  similarFilms: [],
};

export const updateStore = createReducer(initialState, (builder) => {
  builder.addCase(loadFilmsAction, (state, action) => {
    state.genre = 'All genres';
    state.films = action.payload;
    state.filmsCount = 8;
    state.currentFilm = null;
  });
  builder.addCase(loadPromoFilmAction, (state, action) => {
    state.promoFilm = action.payload;
  });
  builder.addCase(setCurrentFilmAction, (state, action) => {
    state.currentFilm = action.payload;
  });
  builder.addCase(loadAllGenresFilmsAction, (state) => {
    state.filteredFilms = state.films;
    state.genre = 'All genres';
    state.filmsCount = 8;
  });
  builder.addCase(changeGenreAction, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(showMoreFilmsAction, (state, action) => {
    state.filmsCount += action.payload;
  });
  builder.addCase(setFilteredFilmsAction, (state, action) => {
    state.filteredFilms = action.payload;
  });
  builder.addCase(requireAuthorizationAction, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(loadSimilarFilmsAction, (state, action) => {
    state.similarFilms = action.payload;
  });
  builder.addCase(
    resetStateAction,
    () => initialState // Сброс состояния на начальное
  );
});
