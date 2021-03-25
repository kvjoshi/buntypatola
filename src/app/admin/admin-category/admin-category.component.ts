import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']

})
export class AdminCategoryComponent implements OnInit {
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  type = 'Category';
  constructor() { }

  ngOnInit(): void {
  }

}
