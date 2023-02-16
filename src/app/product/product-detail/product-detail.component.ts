import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(private route: ActivatedRoute,
              private productApiService: ProductApiService) {
  }

  ngOnInit() {
    // const productId = this.route.snapshot.quer;
    // this.productApiService.getProduct(productId!).subscribe((product) => {
    //   this.product = product;
    // })

    this.route.paramMap
          .pipe(
            switchMap((paramMap) => {
              const productId = paramMap.get('id')!;
              return this.productApiService.getProduct(productId);
    })).subscribe((product) => {
      this.product = product!;
    });
  }
}
