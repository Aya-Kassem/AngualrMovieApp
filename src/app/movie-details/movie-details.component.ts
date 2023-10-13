import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  requestedMovie:any = {};
  imgPath:string = `http://image.tmdb.org/t/p/w500/`;
  id:string = '';
  genres:any[] = [];

  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
  }
  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;

    // GET MOVIE DETAILES .........
    this._MoviesService.getMovieDetiles('movie',this.id).subscribe(response => {
      this.requestedMovie = response;
      this.genres = this.requestedMovie.genres;

    })
  }

}
