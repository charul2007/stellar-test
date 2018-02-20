import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { MoviesService } from '../movies/movies.service';
import * as movieActions from './movies.actions';

@Injectable()
export class MovieEffects {

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) { }

  /* /// Movies /// */
  @Effect() movieLoad$ = this.actions$
    .ofType(movieActions.ActionTypes.LOAD_MOVIES)
    .map((action: any) => action.payload)
    .switchMap(payload => this.moviesService.getMovie(payload)
      .map((res: any) => {
        if (res.results) {
          return new movieActions.LoadMoviesCompleteAction(res);
        } else {
          return new movieActions.LoadMoviesErrorAction({message: 'Failed To Load Related Votes.' });
        }
      })
      .catch(err => {
        return of(new movieActions.LoadMoviesErrorAction({message: 'Failed To Load Related Votes.' }));
      })
    );

}
