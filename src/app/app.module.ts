import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './utils/convert-to-space.pipe';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component'
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsListComponent,
    ConvertToSpacePipe,
    RatingStarsComponent,
    ProductDetailComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: HomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // { path: '**', component: PageNotFound }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
