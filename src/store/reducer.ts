import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { Films, Film } from '../types/film';
import { Review } from '../types/review';
import {
  loadFilmsAction,
  loadAllGenresFilmsAction,
  changeGenreAction,
  showMoreFilmsAction,
  setFilteredFilmsAction,
  requireAuthorizationStatusAction,
  loadPromoFilmAction,
  setCurrentFilmAction,
  loadSimilarFilmsAction,
  resetStateAction,
  resetLoadFilmReviewsAction,
  setErrorAction,
  loadUserInfoAction,
} from './action';

import { AuthorizationStatus } from '../const/const';
import { UserInfo } from '../types/user-info';

type InitialState = {
  films: Films;
  genre: string;
  filmsCount: number;
  filteredFilms: Films;
  authorizationStatus: AuthorizationStatus;
  promoFilm: Film | null;
  currentFilm: Film | null;
  similarFilms: Films;
  filmReviews: Review[];
  error: string | null;
  userInfo: UserInfo | null;
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
  filmReviews: [],
  error: null,
  userInfo: null,
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
  builder.addCase(requireAuthorizationStatusAction, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setErrorAction, (state, action) => {
    state.error = action.payload;
  });
  builder.addCase(loadSimilarFilmsAction, (state, action) => {
    state.similarFilms = action.payload;
  });
  builder.addCase(resetLoadFilmReviewsAction, (state, action) => {
    state.filmReviews = action.payload;
  });
  builder.addCase(
    loadUserInfoAction,
    (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload; // Сохраняем полученные данные о пользователе в store
    }
  );
  builder.addCase(
    resetStateAction,
    () => initialState // Сброс состояния на начальное
  );
});
