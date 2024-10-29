export enum AppRoute {
  Login = '/login',
  MyList = '/my-list',
  Review = '/films/:id/review',
  Main = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  PromoFilm = '/promo',
  Films = '/films',
  SimilarFilms = '/films/{filmId}/similar',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite',
  AddFavorite = '/favorite/{filmId}/{status}',
  Reviews = '/comments/{filmId}',
  Film = '/films/{filmId}',
  Comments = '/comments/{filmId}',
}
