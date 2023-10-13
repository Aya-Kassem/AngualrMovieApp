import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';





@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  constructor(private _MoviesService:MoviesService) { }

  AllMovies:any[]=[];
  pageNum:number = 1;
  imgPath:string = `http://image.tmdb.org/t/p/w500/`;

  ngOnInit(): void {
    this._MoviesService.getMovies('movie', 1).subscribe( response => {
      this.AllMovies = response.results;
    } )
  }

  getAllMovies($event:any){
    if($event.target.innerHTML == 'Next'){
      this.pageNum++;
      this._MoviesService.getMovies('movie',this.pageNum).subscribe(response => {
        this.AllMovies = response.results;
      })
    }
    else{
      if(this.pageNum != 1){
        this.pageNum--;
        this._MoviesService.getMovies('movie',this.pageNum).subscribe(response => {
          this.AllMovies = response.results;
        })
      }
    }
  }
}
