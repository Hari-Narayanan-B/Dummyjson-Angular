import { Component, Input } from '@angular/core';
import { Cards } from './cards/cards';
import { Api } from '../../api';


@Component({
  selector: 'app-product',
  imports: [Cards],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  constructor(private api: Api) {}
  item: any[] = [];
  ngOnInit() {
    this.api.getProducts().then(Product =>this.item = Product.products);
  }
}
