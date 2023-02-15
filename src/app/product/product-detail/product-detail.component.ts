import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from 'rxjs';
import {ProductApiService} from "../products-api.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  product: Product | null;

  constructor(private route: ActivatedRoute, private productApiService: ProductApiService) {
  }

  ngOnInit() {
    this.route.paramMap.pipe(switchMap((paramMap) => {
      return this.productApiService.getProduct(paramMap.get('id')!);
    })).subscribe((product) => {
      this.product = product!;
    });
  }
}
