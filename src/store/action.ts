import { createAction } from '@reduxjs/toolkit';

export const Action = {
  CHANGE_GENRE: 'CHANGE_GENRE',
  SORT_FILMS_BY_GENRE: 'SORT_FILMS_BY_GENRE',
  LOAD_FILMS_LIST: 'LOAD_FILMS_LIST',
};

export const loadFilmsListAction = createAction<string>(Action.LOAD_FILMS_LIST);
export const changeGenreAction = createAction<string>(Action.CHANGE_GENRE);
export const sortFilmsListByGenreAction = createAction(
  Action.SORT_FILMS_BY_GENRE
);
