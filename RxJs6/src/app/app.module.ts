import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/components/movie-list/movie-list.component';
import { MovieHeaderComponent } from './movies/components/movie-header/movie-header.component';
import { HttpMovieService } from './movies/model/http-movie-service';
import { RxMovieService } from './movies/model/rx-movie-service';


@NgModule({

  declarations: [
    AppComponent,
    MovieListComponent,
    MovieHeaderComponent
  ],

  imports: [
    BrowserModule,
    HttpModule
  ],

  providers: [
    HttpMovieService,
    RxMovieService
  ],

  bootstrap: [AppComponent],


})
export class AppModule { }
