import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';


declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
  constructor(private _MoviesService:MoviesService, private _Router:Router) { 
    
  }

  allMovies:any[] =[];
  allShows:any[] =[];
  allpeople:any[] =[];
  imgPath:string = `http://image.tmdb.org/t/p/w500/`;
  mobileMedia:any = window.matchMedia("(min-width: 750px)");

  // https://www.youtube.com/watch?v=Bh8NeyejykU
  slideConfig = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 480, settings: {slidesToShow: 2, slidesToScroll: 2} },
      { breakpoint: 750, settings: {slidesToShow: 3, slidesToScroll: 1} },
      { breakpoint: 992, settings: {slidesToShow: 4, slidesToScroll: 1} },
    ]
  };

  ngOnInit(): void {


    // SLICK PREV ARROW.........
    $('.left').click(function(){
      $('.slick-slider').slick('slickPrev');
    });
    // SLICK NEXT ARROW.........
    $('.right').click(function(){
      $('.slick-slider').slick('slickNext');
    });

    // GET TRENDING MOVIES ...................
    this._MoviesService.getMovies('movie', 1).subscribe( movies => {
      // this.allMovies = movies.results;
      if( this.mobileMedia.matches ){
        this.allMovies = movies.results.slice(0, 10);
      }else{
        this.allMovies = movies.results.slice(0, 6);
      }
    })

    // GET TRENDING TV SHOWS .................
    this._MoviesService.getMovies('tv',1).subscribe( tvShow => {
      // this.allShows = tvShow.results.slice(0, 10);
      if( this.mobileMedia.matches ){
        this.allShows = tvShow.results.slice(0, 10);
      }else{
        this.allShows = tvShow.results.slice(0, 6);
      }
    } )

    // GET TRENDING PEOPLE .................
    this._MoviesService.getMovies('person', 1).subscribe( persons => {
      // this.allpeople = persons.results.slice(0, 10);
      if( this.mobileMedia.matches ){
        this.allpeople = persons.results.slice(0, 10);
      }else{
        this.allpeople = persons.results.slice(0, 6);
      }
    } )
  }
  // GO TO ANY PAGE .........
  viewAll(requestedComponent:string){
    this._Router.navigate([requestedComponent]);
  }




}
