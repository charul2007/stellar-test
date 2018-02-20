import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, Http} from '@angular/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule, combineReducers} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { AppRoutingModule } from './app.routing';
import { AppNavComponent } from './nav/nav.component';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';

import { MovieEffects } from './movies/movies.effects';
import { reducer } from './reducers';
import { MovieDropdownComponent } from './shared/movie.dropdown.component';
import { CapitalizePipe } from './shared/capitalize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    MoviesComponent,
    CapitalizePipe,
    MovieDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
