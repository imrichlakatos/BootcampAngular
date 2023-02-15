import {Component, OnInit} from '@angular/core';
import {ProductApiService} from "../products-api.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productApiService: ProductApiService) { }

  ngOnInit() {
  }
}
