import { Component, OnInit, Input, Output } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'movie-dropdown',
  template: `
  	<div class="movie-dropdown">
	  	<div class="movie-title" (click)=toggleDropdown()>
				<span [ngClass]="{'open': open}">Movie: {{selectedMovie}}</span>
	  	</div>
	  	<ul class="movie-list" [ngClass]="{'open': open}">
				<li *ngFor="let movie of movies" (click)="selectMovie($event)">{{movie.title | capitalize}}</li>
	  	</ul>
	  	<span class="clear" *ngIf="showClear" (click)="clearSelectedMovie()">Clear</span>
	  </div>
  `,
  styles: [`
  	.movie-dropdown {
  		display: block;
	    margin: 0;
	    padding: 0;
	    width: 100%;
	    max-width: 350px;
	    color: #000;
	    border-radius: 5px;
	    overflow: hidden;
	    cursor: pointer;
	    position: relative;
  	}
  	.movie-title span.open {
	    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	    border-bottom-right-radius: 0;
	    border-bottom-left-radius: 0;
		}
  	.movie-title span {
  		display: flex;
	    padding: 5px;
	    position: relative;
	    font-weight: bold;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    cursor: pointer;
	    white-space: nowrap;
	    padding-right: 30px;
	    border: 1px solid #cccccc;
	    background: #e6e6e6;
	    border-radius: 5px;
  	}
  	.movie-title span.open:after {
		  transform: rotate(180deg);
		}
  	.movie-title span:after {
  		transform: rotate(0deg);
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #a6a6a6;
      position: absolute;
      top: 12px;
      right: 10px;
      transition: transform .5s ease;
    }
  	.movie-list {
  		max-height: 0;
	    overflow: hidden;
	    background: #e6e6e6;
	    transition: max-height .5s ease;
	    border-bottom-right-radius: 5px;
	    border-bottom-left-radius: 5px;
	    cursor: pointer;
  	}
  	.movie-list.open {
	    max-height: 150px;
	    max-width: 350px;
	    overflow: auto;
	    border-right: 1px solid #cccccc;
	    border-bottom: 1px solid #cccccc;
	    border-left: 1px solid #cccccc;
		}
		ul.movie-list {
			padding: 0;
	    margin: 0;
	    list-style: none;
		}
		.movie-list li {
	    padding: 7px 5px;
	    border-top: 1px solid #cccccc;
		}
		.movie-list li:hover {
      background-color: #d9d9d9;
    }
  	.movie-control {
  		display: flex;
    	max-width: 350px;
    	height: 30px;
	    padding: 5px;
	    position: relative;
	    font-weight: bold;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    padding-right: 30px;
	    border: 1px solid #cccccc;
	    background: #e6e6e6;
	    border-radius: 5px;
  	}
  	.movie-control option {
  		max-height: 0;
	    overflow: hidden;
	    background: #e6e6e6;
	    transition: max-height .5s ease;
	    border-bottom-right-radius: 5px;
	    border-bottom-left-radius: 5px;
	    cursor: pointer;
  	}
  	.clear {
  		display: flex;
  		justify-content: flex-end;
  		color: #333;
	    font-size: .75rem;
	    padding: 5px;
  	}
  	`
  ]
})
export class MovieDropdownComponent implements OnInit {

	@Input() movies;
	private open: boolean = false;
	private showClear: boolean = false;
	private selectedMovie: string = '';
  constructor() { }

  ngOnInit() {

  }

  toggleDropdown() {
  	this.open = !this.open;
  }

  selectMovie(event) {
  	this.selectedMovie = event.target.innerText;
  	this.open = false;
  	this.showClear = true;
  }

  clearSelectedMovie() {
  	this.selectedMovie = '';
  	this.showClear = false;
  }
}
