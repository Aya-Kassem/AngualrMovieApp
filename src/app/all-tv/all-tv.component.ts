import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-all-tv',
  templateUrl: './all-tv.component.html',
  styleUrls: ['./all-tv.component.css']
})
export class AllTvComponent implements OnInit {

  AllTv:any[]=[];
  pagenum:number = 1;
  imgPath:string = `http://image.tmdb.org/t/p/w500/`;

  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getMovies('tv',this.pagenum).subscribe(response => {
      this.AllTv = response.results;
    })
  }
  getAllShow($event:any){
    if($event.target.innerHTML == 'Next'){
      this.pagenum++;
      this._MoviesService.getMovies('tv', this.pagenum).subscribe(response => {
        this.AllTv = response.results;
      })
    }
    else{
      if(this.pagenum != 1){
        this.pagenum--;
        this._MoviesService.getMovies('tv', this.pagenum).subscribe(response => {
          this.AllTv = response.results;
        })
      }
    }
  }
}
