import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-all-people',
  templateUrl: './all-people.component.html',
  styleUrls: ['./all-people.component.css']
})
export class AllPeopleComponent implements OnInit {

  AllPeople:any[] = [];
  pagenum:number= 1;
  imgPath:string = `http://image.tmdb.org/t/p/w500/`;
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getMovies('person', this.pagenum).subscribe(response => {
      this.AllPeople = response.results;
    })
  }
  getAllPeople($event:any){
    if( $event.target.innerHTML == 'Next' ){
      this.pagenum++;
      this._MoviesService.getMovies('person',this.pagenum).subscribe(response => {
        this.AllPeople = response.results;
      })
    }
    else{
      if(this.pagenum != 1){
        this.pagenum--;
        this._MoviesService.getMovies('person',this.pagenum).subscribe(response => {
          this.AllPeople = response.results;
        })
      }
    }
  };
}
