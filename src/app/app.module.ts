import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { UserreposComponent } from './components/items/userrepos/userrepos.component';
import { FotterComponent } from './components/includes/fotter/fotter.component';
import { AccinfoComponent } from './components/items/accinfo/accinfo.component';
import { UserinfoComponent } from './components/items/userinfo/userinfo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/pages/user/user.component';
// import { textlimitPipe} from './pipes/textlimit.pipes'

 
@NgModule({
  declarations: [
    // textlimitPipe,
    AppComponent,
    NavbarComponent,
    UserinfoComponent,
    UserreposComponent,
    AccinfoComponent,
    AboutComponent,
    HomeComponent,
    FotterComponent,
    PagenotfoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
