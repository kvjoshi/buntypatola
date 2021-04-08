import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent  {
  public Sliders :any ;
  public Videos : any ;
  // tslint:disable-next-line: variable-name
  public Product_Cat : any ;

  // sample array for inycorousel
images = [
    {path: './assets/img/cover/cover-1.jpeg'},
    {path: './assets/img/cover/cover-2.jpeg'},
    {path: './assets/img/cover/cover-3.jpg'},
    {path: './assets/img/cover/cover-4.jpeg'},
    {path: './assets/img/cover/cover-5.jpg'},
    {path: './assets/img/cover/cover-6.jpg'},
    {path: './assets/img/cover/cover-7.jpg'}
  ];


  constructor(private httpService: HttpClient) { }
  // tslint:disable-next-line: use-lifecycle-interface
ngOnInit(): void {

  this.getSliders();
  this.getVideos();
  this.getProductCats();

  }
getSliders(): void {
    this.httpService.get('http://localhost/bunty/api/Home_Slider/read.php').subscribe(
        data => {
          this.Sliders = data as JSON;
          console.log('Set Sliders....' + JSON.stringify(this.Sliders));
        }
      );
  }
  getVideos(): void {

    this.httpService.get('http://localhost/bunty/api/Video/read.php').subscribe(
        data => {
          this.Videos = data as JSON;
          console.log('Get Videos....' + JSON.stringify(this.Videos));
        }
      );
  }
getProductCats(): void {
  this.httpService.get('http://localhost/bunty/api/Product_Cat/read.php').subscribe(
      data => {
        this.Product_Cat =  data as unknown as Map<string, object>;
        console.log('Get Categories....' + JSON.stringify(this.Product_Cat));
      }
    );
}
}
