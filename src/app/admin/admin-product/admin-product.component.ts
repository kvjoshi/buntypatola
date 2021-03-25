import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
type = 'Product';
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
