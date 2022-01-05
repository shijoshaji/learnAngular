import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnChanges {
  cropWidth: number = 75;
  @Input() rating: number = 4; //taking input from backend so the Onchanges happens and binding with property binding

  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75 / 5;

  }

}
