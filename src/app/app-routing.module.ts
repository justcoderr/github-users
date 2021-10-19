import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { UserComponent } from './components/pages/user/user.component';

const routes: Routes = [
  { path: '', component:  HomeComponent}, 
  { path: 'github-users', component:  HomeComponent}, //adding github users just for github hosting
  { path: 'github-users/about', component: AboutComponent },
  {path: 'github-users/user/:id', component:UserComponent},
  {path: 'github-users/404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
