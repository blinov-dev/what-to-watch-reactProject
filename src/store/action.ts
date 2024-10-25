import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const/const';

export const Action = {
  LOAD_FILMS: 'LOAD FILMS',
  CHANGE_GENRE: 'CHANGE_GENRE',
  LOAD_START_PAGE: 'LOAD_FILMS_LIST',
  SHOW_MORE_FILMS: 'SHOW_MORE_FILMS',
  SET_FILTERED_FILMS: 'SET_FILTERED_FILMS',
  REQUIRE_AUTHORIZATION: 'REQUIRE_AUTHORIZATION',
};

export const loadFilmsAction = createAction<Film[]>(Action.LOAD_FILMS);
export const loadStartPageAction = createAction(Action.LOAD_START_PAGE);
export const changeGenreAction = createAction<string>(Action.CHANGE_GENRE);
export const showMoreFilmsAction = createAction<number>(Action.SHOW_MORE_FILMS);
export const setFilteredFilmsAction = createAction<Film[]>(
  Action.SET_FILTERED_FILMS
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  Action.REQUIRE_AUTHORIZATION
);
