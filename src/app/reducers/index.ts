
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { combineReducers } from '@ngrx/store';

import * as fromMovie from '../movies/movies.reducers';

export interface State {
  movie: fromMovie.State;
}
export const reducer: ActionReducerMap<State> = {
  movie: fromMovie.reducer,
};

/**
 * Movie
 */
export const getMovieState = (state: State) => state.movie;
export const getMovies = createSelector(getMovieState, fromMovie.getMovies);

