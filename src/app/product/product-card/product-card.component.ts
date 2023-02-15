import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../models/product";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;

  @Output() productClicked = new EventEmitter();

  getImage() {
    return `https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg`;
  }
}
