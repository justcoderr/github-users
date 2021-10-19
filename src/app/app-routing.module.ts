import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { UserComponent } from './components/pages/user/user.component';

const routes: Routes = [
  { path: '', component:  HomeComponent}, 
  { path: 'about', component: AboutComponent },
  {path: 'user/:id', component:UserComponent},
  {path: '404', component: PagenotfoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
