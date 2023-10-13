import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  id:string = '';
  tvDetails:any = {};
  imgPath:string = `http://image.tmdb.org/t/p/w500/`;
  genres:any[] = [];
  seasons:number = 1;

  
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) { 
    this.id = this._ActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this._MoviesService.getMovieDetiles('tv',this.id).subscribe(response => {
      this.tvDetails = response;
      this.genres = this.tvDetails.genres;
      this.seasons = this.tvDetails.seasons.length;
      console.log(typeof(this.tvDetails))
    })
  }

}
