/* eslint-disable no-console */
import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';

import {
  APIRoute,
  AppRoute,
  AuthorizationStatus,
  TIMEOUT_SHOW_ERROR,
} from '../const/const';
import { Film, Films } from '../types/film';
import {
  loadFilmsAction,
  loadPromoFilmAction,
  loadSimilarFilmsAction,
  Action,
  resetLoadFilmReviewsAction,
  requireAuthorizationStatusAction,
  setErrorAction,
  redirectToRoute,
  loadUserInfoAction,
  loadFavoriteFilmsAction,
} from './action';
import { Review, User } from '../types/review';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user-data';
import { store } from '.';
import { AddFavorite } from '../types/add-favorite';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.LOAD_FILMS, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(APIRoute.Films);
  dispatch(loadFilmsAction(data));
});

export const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.LOAD_PROMO_FILM, async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Film>(APIRoute.PromoFilm);
  dispatch(loadPromoFilmAction(data));
});

export const fetchSimilarFilmsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.LOAD_SIMILAR_FILMS, async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Films>(
    APIRoute.SimilarFilms.replace('{filmId}', filmId)
  );
  dispatch(loadSimilarFilmsAction(data));
});

export const fetchFilmReviewsAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.LOAD_FILM_REVIEWS, async (filmId, { dispatch, extra: api }) => {
  const { data } = await api.get<Review[]>(
    APIRoute.Reviews.replace('{filmId}', filmId)
  );
  dispatch(resetLoadFilmReviewsAction(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  Action.REQUIRE_AUTHORIZATION_STATUS,
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorizationStatusAction(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorizationStatusAction(AuthorizationStatus.NoAuth));
      dispatch(setErrorAction('Вы не авторизированны!'));
    }
  }
);

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(requireAuthorizationStatusAction(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
  dispatch(requireAuthorizationStatusAction(AuthorizationStatus.NoAuth));
});

export const clearErrorAction = createAsyncThunk(Action.SET_ERROR, () => {
  setTimeout(() => store.dispatch(setErrorAction(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchUserInfoAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(Action.LOAD_USER_INFO, async (_arg, { dispatch, extra: api }) => {
  const response = await api.get<User>(AppRoute.Login);
  dispatch(loadUserInfoAction(response.data));
});

// export const fetchAddFilmInFavoriteAction = createAsyncThunk<
//   void,
//   AddFavorite, // Используем новый интерфейс
//   {
//     dispatch: AppDispatch;
//     state: State;
//     extra: AxiosInstance;
//   }
// >(
//   Action.ADD_FILM_IN_FAVORITE,
//   async ({ filmId, status }, { dispatch, extra: api }) => {
//     const { data } = await api.post<Film>(
//       APIRoute.AddFavorite.replace('{filmId}', filmId).replace(
//         '{status}',
//         status.toString()
//       )
//     );
//     dispatch(addFilmInFavoriteAction(data));
//   }
// );

// export const fetchFavoriteFilmsAction = createAsyncThunk<
//   void,
//   undefined,
//   {
//     dispatch: AppDispatch;
//     state: State;
//     extra: AxiosInstance;
//   }
// >(Action.LOAD_FAVORITE_FILMS, async (_arg, { dispatch, extra: api }) => {
//   const { data } = await api.get<Film[]>(APIRoute.Favorite);
//   dispatch(loadFavoriteFilmsAction(data));
//   console.log(data);
// });
export const fetchAddFilmInFavoriteAction = createAsyncThunk<
  void,
  AddFavorite, // Используем новый интерфейс
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  Action.ADD_FILM_IN_FAVORITE,
  async ({ filmId, status }, { dispatch, extra: api }) => {
    await api.post<Film>(
      APIRoute.AddFavorite.replace('{filmId}', filmId).replace(
        '{status}',
        status.toString()
      )
    );

    // Получаем обновленный список любимых фильмов
    const { data: favoriteFilms } = await api.get<Film[]>(APIRoute.Favorite);
    dispatch(loadFavoriteFilmsAction(favoriteFilms)); // Обновляем состояние с новыми любимыми фильмами
  }
);

export const fetchFavoriteFilmsAction = createAsyncThunk<
  Film[], // Тип возвращаемого значения
  void, // Тип аргументов (в данном случае нет аргументов)
  {
    extra: AxiosInstance; // Тип для AxiosInstance
  }
>(
  'favoriteFilms/fetch', // Тип действия
  async (_, { extra: api }) => {
    const response = await api.get<Film[]>(APIRoute.Favorite); // Выполняем запрос к API
    console.log(response.data);

    return response.data; // Возвращаем данные
  }
);
