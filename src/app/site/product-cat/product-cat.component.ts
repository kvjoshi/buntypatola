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

  public ProductCatList: any;
  constructor(private httpService: HttpClient) { }

  ngOnInit(): void {
    this.getProductCat();
  }

getProductCat(): void{
  // tslint:disable-next-line: deprecation
  this.httpService.get('http://localhost/bunty/api/Product_Cat/read.php').subscribe(
    data => {
      this.ProductCatList = data as unknown as Map<string, object>;
      console.log('Get Categories....' + JSON.stringify(this.ProductCatList));
      // tslint:disable-next-line: prefer-for-of
     /* for (let i = 0; i < this.ProductCatList.data.length; i++) {
        console.log('anyrhinh..' + this.ProductCatList.data[i].pc_name);
      }*/

      // {"data":[{"pc_name":"kv","pc_img":"kv","pc_desc":"kv-desc","pc_id":"1"}]}
    }
  );
}
}
