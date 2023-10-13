import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AllTvComponent } from './all-tv/all-tv.component';
import { AllPeopleComponent } from './all-people/all-people.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    MovieDetailsComponent,
    NotFoundComponent,
    NavbarComponent,
    TvDetailsComponent,
    PersonDetailsComponent,
    AllMoviesComponent,
    AllTvComponent,
    AllPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
