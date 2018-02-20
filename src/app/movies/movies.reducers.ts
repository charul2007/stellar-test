import { Action } from '@ngrx/store';

import { Movie } from './movies.interface';

import * as moviesActions from './movies.actions';

export interface State  {
 
  movies: Movie[];
  loadMoviesError: string;

}

export const initialState: State = {
  
  movies: [],
  loadMoviesError: ''

};

export function reducer(
  state = initialState,
  action
): State {
  switch (action.type) {
  
    case moviesActions.ActionTypes.LOAD_MOVIES_COMPLETE: {
      return Object.assign({}, state, {
        movies: action.payload
      });
    }
    case moviesActions.ActionTypes.LOAD_MOVIES_ERROR: {
      return Object.assign({}, state, {
        loadMoviesError: action.payload.message,
        movies: [],
      });
    }

    default: {
      return state;
    }
  }
}

export const getMovies = (state: State) => state.movies;
