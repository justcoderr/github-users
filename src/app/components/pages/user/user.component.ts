import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  adminAccount:any;
  repos :any;
  username = this.route.snapshot.params['id'] ;
  errorMessage="";
  // username = "aelhajji";
constructor(user:UsersService , private route:ActivatedRoute) { 
  user.getUser(this.username).subscribe( res =>{
    this.adminAccount = res
  }, err =>{
    this.errorMessage = err.message;
    console.log
  });
  user.getUserRepos(this.username).subscribe( res =>{
    this.repos = res
  }, err =>{

  });
}

ngOnInit(): void {
}
}
