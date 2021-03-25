import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
type = 'Slider';
  showModal = false;
  toggleModal(){
    this.showModal = !this.showModal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
