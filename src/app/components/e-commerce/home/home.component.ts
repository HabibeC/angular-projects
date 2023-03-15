import { BasketModel } from './../../models/basket.model';
import { Store } from '@ngrx/store';
import { ProductModel } from './../../models/product.model';
import { Component } from '@angular/core';
import * as BasketActions from '../../../store/actions/baskets.actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products: ProductModel[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts() {
    for (let i = 0; i < 8; i++) {
      let product = new ProductModel();
      product.id = i;
      product.name = `Product${i}`;
      product.unitPrice = i * 10;
      product.stock = i * 100;

      this.products.push(product);
    }
  }

  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = 1;
    this.store.dispatch(BasketActions.addBasket({basket:basketModel}));
    console.log('added');
  }
}
