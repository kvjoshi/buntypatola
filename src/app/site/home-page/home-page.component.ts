import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent  {

  //sample array for inycorousel
 images = [
		{
			path: './assets/img/cover/cover-1.jpeg'
		},
		{
			path: './assets/img/cover/cover-2.jpeg'
		},
		{
			path: './assets/img/cover/cover-3.jpg'
		},
		{
			path: './assets/img/cover/cover-4.jpeg'
		},
		{
			path: './assets/img/cover/cover-5.jpg'
		},
		{
			path: './assets/img/cover/cover-6.jpg'
		},
		{
			path: './assets/img/cover/cover-7.jpg'
		}
	];

  constructor() { }
  
 

}
