import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { Review } from '../types/review';
import { AppRoute, AuthorizationStatus } from '../const/const';

export const Action = {
  LOAD_FILMS: 'LOAD FILMS',
  LOAD_PROMO_FILM: 'LOAD PROMO FILM',
  LOAD_SIMILAR_FILMS: 'LOAD SIMILAR FILMS',
  CHANGE_GENRE: 'CHANGE_GENRE',
  LOAD_ALL_GENRES_FILMS: 'LOAD_ALL_GENRES_FILMS',
  SHOW_MORE_FILMS: 'SHOW_MORE_FILMS',
  SET_FILTERED_FILMS: 'SET_FILTERED_FILMS',
  REQUIRE_AUTHORIZATION_STATUS: 'REQUIRE_AUTHORIZATION_STATUS',
  SET_CURRENT_FILM: 'SET_CURRENT_FILM',
  RESET_STATE: 'RESET_STATE',
  LOAD_FILM_REVIEWS: 'LOAD_FILM_REVIEWS',
  LOGIN_AUTHORIZATION_STATUS: 'LOGIN_AUTHORIZATION_STATUS',
  SET_ERROR: 'SET_ERROR',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
};

export const loadFilmsAction = createAction<Film[]>(Action.LOAD_FILMS);
export const loadSimilarFilmsAction = createAction<Film[]>(
  Action.LOAD_SIMILAR_FILMS
);
export const setCurrentFilmAction = createAction<Film>(Action.SET_CURRENT_FILM);
export const loadPromoFilmAction = createAction<Film>(Action.LOAD_PROMO_FILM);
export const loadAllGenresFilmsAction = createAction(
  Action.LOAD_ALL_GENRES_FILMS
);
export const changeGenreAction = createAction<string>(Action.CHANGE_GENRE);
export const showMoreFilmsAction = createAction<number>(Action.SHOW_MORE_FILMS);
export const setFilteredFilmsAction = createAction<Film[]>(
  Action.SET_FILTERED_FILMS
);

export const requireAuthorizationStatusAction =
  createAction<AuthorizationStatus>(Action.REQUIRE_AUTHORIZATION_STATUS);
export const setErrorAction = createAction<string | null>(Action.SET_ERROR);
export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);

export const resetStateAction = createAction(Action.RESET_STATE);
export const resetLoadFilmReviewsAction = createAction<Review[]>(
  Action.LOAD_FILM_REVIEWS
);
