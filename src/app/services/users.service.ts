import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
// import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.url;
  constructor(private http:HttpClient) { }
  getUser(id:string){
    return this.http.get(this.url+"/"+id);
  }
  getUserRepos(id:string){
    return this.http.get(this.url+"/"+id+"/repos");
  }
  
}
