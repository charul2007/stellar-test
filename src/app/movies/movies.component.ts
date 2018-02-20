import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import * as fromRoot from '../reducers';
import * as moviesActions from './movies.actions';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  private movies;

  constructor(private store: Store<fromRoot.State>,
  	) { }

  ngOnInit() {

  	this.store.select(fromRoot.getMovies).subscribe(movies => {
  		this.movies = movies;
  	});

  	this.store.dispatch(new moviesActions.LoadMoviesAction('popular'));

  }

}
