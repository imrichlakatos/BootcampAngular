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
  selectedOption: string = 'default';
  catalogs: Catalog[];
  products: Product[];

  constructor(private productApiService: ProductApiService, private router: Router) {
  }

  ngOnInit() {
      this.getAvailableCatalogs();
  }

  getAvailableCatalogs() {
    this.productApiService.getCatalogs()
        .subscribe((catalogs) => {
      this.catalogs = catalogs;
    });
  }

  catalogChanged(id: string) {
    if (this.selectedOption === 'default') {
      return;
    }
    this.productApiService.getCatalog(id).subscribe((catalog) => {
      this.products = catalog.products!;
    });
  }

  goToProduct(product: Product) {
    this.router.navigateByUrl(`product/${product.publicId}`, {state: {product}});
  }
}
