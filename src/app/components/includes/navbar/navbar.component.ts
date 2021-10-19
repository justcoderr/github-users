import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId="";
  constructor() { }
  searchUser(id:string){
    alert(id)
  }
  ngOnInit(): void {
  }

}
