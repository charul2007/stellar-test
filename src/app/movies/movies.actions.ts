import { Action } from '@ngrx/store';
import { type } from '../utils';
import { Movie } from './movies.interface';

export const ActionTypes = {
  LOAD_MOVIES: type('[Home] Load Movies'),
  LOAD_MOVIES_COMPLETE: type('[Home] Load Movies Complete'),
  LOAD_MOVIES_ERROR: type('[Home] Load Movies Error')
};

export class LoadMoviesAction implements Action {
  type = ActionTypes.LOAD_MOVIES;

  constructor(public payload: string) { }
}

export class LoadMoviesCompleteAction implements Action {
  type = ActionTypes.LOAD_MOVIES_COMPLETE;

  constructor(public payload: Movie) { }
}

export class LoadMoviesErrorAction implements Action {
  type = ActionTypes.LOAD_MOVIES_ERROR;

  constructor(public payload: { message: string }) { }
}