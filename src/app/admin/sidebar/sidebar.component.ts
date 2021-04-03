import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  activetab = 'text-blue-500  bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500'; //this is to show which tab open from value in ts type var

  constructor() { }

  ngOnInit(): void {
  }

}
