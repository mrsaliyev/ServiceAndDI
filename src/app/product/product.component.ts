import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    this.productList = this.productService.getProducts();
  }
}
