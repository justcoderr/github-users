import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-userrepos',
  templateUrl: './userrepos.component.html',
  styleUrls: ['./userrepos.component.css']
})
export class UserreposComponent implements OnInit {
  @Input() repos : any
  constructor() { }

  ngOnInit(): void {
  }

}
