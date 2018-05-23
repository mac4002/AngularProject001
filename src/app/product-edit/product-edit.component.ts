import { Component } from '@angular/core';
import { Product, PRODUCT_TEST, TAB_Products } from '../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  public selectedProduct: Product;
  private product:  Product[];
  constructor() {
    this.product = TAB_Products;
    // this.selectedProduct = TAB_Products;
   }
}
