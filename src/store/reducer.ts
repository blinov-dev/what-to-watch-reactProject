import { createReducer } from '@reduxjs/toolkit';
import { Films } from '../types/film';
import {
  loadFilmsAction,
  loadStartPageAction,
  changeGenreAction,
  showMoreFilmsAction,
  setFilteredFilmsAction,
  requireAuthorization,
} from './action';

import { AuthorizationStatus } from '../const/const';

type InitialState = {
  films: Films;
  genre: string;
  filmsCount: number;
  filteredFilms: Films;
  authorizationStatus: AuthorizationStatus;
};

export const initialState: InitialState = {
  films: [],
  genre: 'All genres',
  filmsCount: 8,
  filteredFilms: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const updateStore = createReducer(initialState, (builder) => {
  builder.addCase(loadFilmsAction, (state, action) => {
    state.films = action.payload;
  });
  builder.addCase(loadStartPageAction, () => initialState);
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
