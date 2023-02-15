import {Component, OnInit} from '@angular/core';
import {ProductApiService} from "../products-api.service";
import {Catalog} from "../models/catalog";
import {Product} from "../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selectedOption: any;
  catalogs: Catalog[];
  products: Product[];

  constructor(private productApiService: ProductApiService, private router: Router) {
  }

  ngOnInit() {
    this.getAvailableCatalogs();
  }

  getAvailableCatalogs() {
    this.productApiService.getCatalogs().subscribe((catalogs) => {
      this.catalogs = catalogs;
    });
  }

  catalogChanged($event: any) {
    this.productApiService.getCatalog($event).subscribe((catalog) => {
      this.products = catalog.products!;
    });
  }

  goToProduct(id: string) {
    this.router.navigateByUrl(`product/${id}`, {state: {product: this.products.find((product) => product.publicId === id)}});
  }
}
