import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';




@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id:string = '';
  personDetails:any = {};
  imgPath:string = `http://image.tmdb.org/t/p/w500/`;

  
  constructor(private _ActivatedRoute:ActivatedRoute, private _MoviesService:MoviesService) {
    this.id = this._ActivatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {

    this._MoviesService.getMovieDetiles('person', this.id).subscribe(response => {
      this.personDetails = response;
    })

  }

}
