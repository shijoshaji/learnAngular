import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IProduct } from '../products-list/products-list';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail page'
  prodName: IProduct | undefined

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // passing the id
    const id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(`ID loaded ${id}`);

  }

  onBack(): void {
    this.router.navigate(['/products'])
  }

}
