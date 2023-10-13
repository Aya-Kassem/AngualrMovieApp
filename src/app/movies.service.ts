import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  key:string = 'd8b30ddf56e9f31f5633a0cc2fb3f2dd';

  // GET MOVIES, TV AND PEOPLE..........
  getMovies(type:string, page:number): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${this.key}&language=en-US&page=${page}`)
  }


  
  // GET DETAILS ..............
  getMovieDetiles(type:string,id:string): Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${this.key}&language=en-US`)
  }
}
