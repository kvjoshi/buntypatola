
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
// import { Person } from '../person';

// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.css']
})
export class TableCompComponent implements OnDestroy, OnInit {
  @Input()
  whichTable!: string;

  dtOptions: DataTables.Settings = { pagingType: 'full_numbers',
  pageLength: 2};

  ngOnInit(): void {
    console.log('Type of table::::' + this.whichTable);

    switch (this.whichTable) {
      case ('Category'):
        this.dtOptions = {
          ajax: 'http://localhost/bunty/api/Product_Cat/read.php',
          columns: [{
            title: 'Category Name',
            data: 'pc_name'
          }, {
            title: 'Image',
            data: 'pc_img'
          }, {
            title: 'Description',
            data: 'pc_desc'
          }]
        };
        break;
      case ('Product'):
        this.dtOptions = {
          ajax: 'http://localhost/bunty/api/Product/read.php',
          columns: [{
            title: 'Product Name',
            data: 'pp_name'
          }, {
            title: 'Image',
            data: 'pp_img'
          }, {
            title: 'Link',
            data: 'pp_link'
          }, {
            title: 'Category',
            data: 'pc_name'
          }]
        };
        break;
      case ('Slider'):
        this.dtOptions = {
          ajax: 'http://localhost/bunty/api/Home_Slider/read.php',
          columns: [{
            title: 'Slide Title',
            data: 'slide_title'
          }, {
            title: 'Image',
            data: 'slide_img'
          }, {
            title: 'Link',
            data: 'slide_link'
          }]
        };
        break;
      case ('Video'):
        this.dtOptions = {
          ajax: 'http://localhost/bunty/api/Video/read.php',
          columns: [{
            title: 'Link',
            data: 'v_link'
          }]
        };
        break;

      default:
     console.log('Do nothinng');
     break;
  }

    /*this.dtOptions = {
      ajax: 'http://localhost/bunty/api/Product_Cat/read.php',
      columns: [{
        title: 'Category Name',
        data: 'pc_name'
      }, {
        title: 'Image',
        data: 'pc_img'
      }, {
        title: 'Description',
        data: 'pc_desc'
      }]
    };*/
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
//     this.dtTrigger.unsubscribe();
  }
}
