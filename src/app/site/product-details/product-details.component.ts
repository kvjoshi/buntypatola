import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
public Products = {};
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void{
    this.httpService.get('http://localhost/bunty/api/Product/read.php').subscribe(
      data => {
        this.Products = data as JSON;
        console.log('Get Categories....' + JSON.stringify(this.Products));
      }
    );
  }
}
