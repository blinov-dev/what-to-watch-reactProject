import { createReducer } from '@reduxjs/toolkit';
import { Films, Film } from '../types/film';
import {
  loadFilmsAction,
  loadAllGenresFilmsAction,
  changeGenreAction,
  showMoreFilmsAction,
  setFilteredFilmsAction,
  requireAuthorization,
  loadPromoFilmAction,
} from './action';

import { AuthorizationStatus } from '../const/const';

type InitialState = {
  films: Films;
  genre: string;
  filmsCount: number;
  filteredFilms: Films;
  authorizationStatus: AuthorizationStatus;
  promoFilm: Film | null;
};

export const initialState: InitialState = {
  films: [],
  genre: 'All genres',
  filmsCount: 8,
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  promoFilm: null,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder.addCase(loadFilmsAction, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(loadPromoFilmAction, (state, action) => {
    state.promoFilm = action.payload;
  });
  builder.addCase(loadAllGenresFilmsAction, (state) => {
    state.filteredFilms = state.films;
    state.genre = 'All genres';
    state.filmsCount = 8;
  });
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
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
});
