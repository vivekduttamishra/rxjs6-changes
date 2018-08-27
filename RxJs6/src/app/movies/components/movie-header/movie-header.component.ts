import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-header',
  templateUrl: './movie-header.component.html',
  styleUrls: ['./movie-header.component.css']
})
export class MovieHeaderComponent implements OnInit {

  @Input('site-title') siteTitle = 'Movie Web';
  @Input('site-slogan') siteSlogan='Home of Movies';
  constructor() { }

  ngOnInit() {
  }

}
