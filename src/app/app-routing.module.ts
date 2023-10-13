import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { AllPeopleComponent } from './all-people/all-people.component';
import { AllTvComponent } from './all-tv/all-tv.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
import { LogGuardGuard } from './log-guard.guard';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [

  {path: '', redirectTo: 'home',  pathMatch:'full'},
  {path: 'login', canActivate:[LogGuardGuard], component: LoginComponent},
  {path: 'register',canActivate:[LogGuardGuard], component: RegisterComponent},
  {path: 'home',canActivate:[GuardGuard], component: HomeComponent},
  {path: 'AllMovies', canActivate:[GuardGuard], component: AllMoviesComponent},
  {path: 'AllTv', canActivate:[GuardGuard], component: AllTvComponent},
  {path: 'AllPeople', canActivate:[GuardGuard], component: AllPeopleComponent},
  {path: 'movie-details/:id', canActivate:[GuardGuard], component: MovieDetailsComponent},
  {path: 'tv-details/:id', canActivate:[GuardGuard], component: TvDetailsComponent},
  {path: 'person-details/:id', canActivate:[GuardGuard], component: PersonDetailsComponent},
  {path: '**', component: NotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
