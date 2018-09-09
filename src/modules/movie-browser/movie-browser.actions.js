import {createAsyncActionCreator} from '../common/redux.helpers';
import * as movieService from './movie-browser.service';

export const keys = {
  'GET_POPULAR_MOVIES': 'GET_POPULAR_MOVIES',
  'SEARCH_MOVIES': 'SEARCH_MOVIES',
  'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS',
  'GET_MOVIE_CREDITS': 'GET_MOVIE_CREDITS',
};

export const getPopularMovies = (page) => createAsyncActionCreator(
  // actionType
  keys.GET_POPULAR_MOVIES,
  // requestFn
  movieService.getPopularMovies, 
  // requestParams
  {page}
);

export const searchMovies = (query, page) => createAsyncActionCreator(
  keys.SEARCH_MOVIES,
  movieService.searchMovies, 
  {query, page}
);

export const getMovieDetails = (movieId) => createAsyncActionCreator(
  keys.GET_MOVIE_DETAILS,
  movieService.getMovieDetails, 
  {movieId}
);

export const getMovieCredits = (movieId) => createAsyncActionCreator(
    keys.GET_MOVIE_CREDITS,
    movieService.getMovieCredits, 
    {movieId}
  );