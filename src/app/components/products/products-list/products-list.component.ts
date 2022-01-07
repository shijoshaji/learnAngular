import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from './products-list'
import { ProductService } from './product.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit, OnDestroy {
  productListTitle: string = "I'm from product-list -component";
  imageWidth: number = 50;
  showImage: boolean = false;
  errMsg: string = '';
  sub: Subscription
  // listFilter: string = 'cart';
  // using this listFilter via setter & getter

  private _listFilter: string;

  constructor(private productservice: ProductService) { }


  get listFilter() {
    return this._listFilter
  }


  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value)
  }

  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];

  toggleImage(): void {
    this.showImage = !this.showImage

  }

  performFilter(filterBy: string): IProduct[] {

    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter((item: IProduct) =>
      item.title.toLocaleLowerCase().includes(filterBy));

  }




  ngOnInit(): void {
    // we can set default values here/load values
    this.sub = this.productservice.getProduct().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errMsg = err
    });

    console.log('Calling getproduct');


  }

  ngOnDestroy(): void {
    // this.sub = unsubscribe();
  }



}
