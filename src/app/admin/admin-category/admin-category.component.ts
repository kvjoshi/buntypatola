import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']

})
export class AdminCategoryComponent implements OnInit {
  type = 'Category';
  showModal = false;
  // tslint:disable-next-line: typedef
  toggleModal(){
    this.showModal = !this.showModal;
  }
 

  onFormSubmit(): void{
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const image = (document.getElementById('image') as HTMLInputElement).value;
    const desc = (document.getElementById('desc') as HTMLInputElement).value;

    console.log('Form data captured::' + name + '...' + image + '...' + desc);
    this.toggleModal();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
