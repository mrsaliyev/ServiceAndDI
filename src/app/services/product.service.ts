import {Product} from '../product';
import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable()
export class ProductService {

  constructor(private loggingService: LoggingService) {
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    let productList: Product[];
    productList = [
      new Product(1, 'Mobile', 'Samsung S20'),
      new Product(2, 'Laptop', 'Macbook Air'),
      new Product(3, 'Airpods', 'Made in China')
    ];

    this.loggingService.log('List of users: ' + productList);

    return productList;
  }
}
