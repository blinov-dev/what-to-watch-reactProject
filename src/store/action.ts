import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { Review, User } from '../types/review';
import { CommentInfo } from '../types/review';
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
  RESET_STATE: 'RESET_STATE',
  LOAD_FILM_REVIEWS: 'LOAD_FILM_REVIEWS',
  LOGIN_AUTHORIZATION_STATUS: 'LOGIN_AUTHORIZATION_STATUS',
  REDIRECT_TO_ROUTE: 'REDIRECT_TO_ROUTE',
  LOAD_USER_INFO: 'LOAD_USER_INFO',
  LOAD_FAVORITE_FILMS: 'LOAD_FAVORITE_FILMS',
  ADD_FILM_IN_FAVORITE: 'ADD_FILM_IN_FAVORITE',
  LOAD_CURRENT_FILM: 'LOAD_CURRENT_FILM',
  ADD_FILM_COMMENT: 'ADD_FILM_COMMENT',
  LOAD_FILM_COMMENTS: 'LOAD_FILM_COMMENTS',
};

export const loadFilmsAction = createAction<Film[]>(Action.LOAD_FILMS);
export const loadSimilarFilmsAction = createAction<Film[]>(
  Action.LOAD_SIMILAR_FILMS
);
export const loadCurrentFilmAction = createAction<Film>(
  Action.LOAD_CURRENT_FILM
);
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
export const resetStateAction = createAction(Action.RESET_STATE);
export const resetLoadFilmReviewsAction = createAction<Review[]>(
  Action.LOAD_FILM_REVIEWS
);
export const loadFavoriteFilmsAction = createAction<Film[]>(
  Action.LOAD_FAVORITE_FILMS
);
export const addFilmInFavoriteAction = createAction<Film>(
  Action.ADD_FILM_IN_FAVORITE
);
export const loadUserInfoAction = createAction<User>(Action.LOAD_USER_INFO);
export const addFilmCommentAction = createAction<CommentInfo>(
  Action.ADD_FILM_COMMENT
);
export const loadFilmCommentsAction = createAction<Review[]>(
  Action.LOAD_FILM_COMMENTS
);

export const redirectToRoute = createAction<AppRoute>(Action.REDIRECT_TO_ROUTE);
