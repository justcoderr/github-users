import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accinfo',
  templateUrl: './accinfo.component.html',
  styleUrls: ['./accinfo.component.css']
})
export class AccinfoComponent implements OnInit {
@Input() info : any
  constructor() { }

  ngOnInit(): void {
  }

}
