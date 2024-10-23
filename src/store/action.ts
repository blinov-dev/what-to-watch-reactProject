import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film';

export const Action = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  LOAD_FILMS_LIST: 'LOAD_FILMS_LIST',
  SHOW_MORE_FILMS: 'SHOW_MORE_FILMS',
  SET_FILTERED_FILMS: 'SET_FILTERED_FILMS',
};

export const loadFilmsListAction = createAction(Action.LOAD_FILMS_LIST);
export const changeGenreAction = createAction<string>(Action.CHANGE_GENRE);
export const showMoreFilmsAction = createAction<number>(Action.SHOW_MORE_FILMS);
export const setFilteredFilmsAction = createAction<Film[]>(
  Action.SET_FILTERED_FILMS
);
