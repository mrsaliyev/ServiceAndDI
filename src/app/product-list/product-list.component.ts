import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    this.productList = this.productService.getProducts();
  }

}
