import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-product-cat',
  templateUrl: './product-cat.component.html',
  styleUrls: ['./product-cat.component.css']
})
export class ProductCatComponent implements OnInit {

  public ProductCatList = {};
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getProductCat();
  }

getProductCat(): void{
  this.httpService.get('http://localhost/bunty/api/Product_Cat/read.php').subscribe(
    data => {
      this.ProductCatList = data as JSON;
      console.log('Get Categories....' + JSON.stringify(this.ProductCatList));
    }
  );
}
}
