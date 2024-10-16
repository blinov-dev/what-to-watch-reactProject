import { Film } from '../types/film';

export const PROMO_FILM: Film = {
  id: 222,
  name: 'The Grand Budapest Hotel',
  posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
  previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
  backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
  backgroundColor: '#000',
  videoLink:
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  previewVideoLink:
    'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
  description: 'Description 1',
  rating: 8.5,
  scoresCount: 1000,
  director: 'Director 1',
  starring: ['Actor 1'],
  runTime: 80,
  genre: 'Drama',
  released: 2014,
  isFavorite: false,
};
