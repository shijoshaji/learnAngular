import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productTitle: string = "I'm from product-component"

  constructor() { }

  ngOnInit(): void {
  }

}
