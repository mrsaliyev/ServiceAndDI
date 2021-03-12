import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-product-collec',
  templateUrl: './product-collec.component.html',
  styleUrls: ['./product-collec.component.scss']
})
export class ProductCollecComponent implements OnInit {
  productList: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
}
