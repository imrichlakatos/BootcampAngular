import {Component, OnInit} from '@angular/core';
import {ProductApiService} from "../../product/products-api.service";
import {forkJoin, map, of, switchMap} from "rxjs";
import {Product} from "../../product/models/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ToasterService} from "../../../shared/toaster/toaster.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  isBold: boolean;
  // buttonState = 'primary';
  productList: Product[];
  catalogList = this.productApiService.getCatalogs().pipe(switchMap((val) => {
    forkJoin(val.map((catalog) => {
      return this.productApiService.getCatalog(catalog.publicId!);
    })).pipe(map(catalogs => catalogs.map(catalog => catalog.products))).subscribe((products) => {
      this.productList = products.reduce((acc, val) => acc!.concat(val!), []) ?? [];
    });
    return of(val);
  }));

  constructor(private productApiService: ProductApiService,
              private router: Router,
              private route: ActivatedRoute,
              private toasterService: ToasterService) {
  }

  ngOnInit() {
  }

  getIsBold() {
    return this.isBold ? 'font-extrabold' : 'font-medium';
  }

  getFontWeight() {
    return this.isBold ? '700' : '400';
  }

  getIsBoldBool() {
    return this.isBold;
  }

  goToEditProduct(id: string) {
    this.router.navigate(['product/edit', id], {relativeTo: this.route});
  }

  goToCreateNewProduct() {
    this.router.navigate(['product/new'], {relativeTo: this.route});
  }

  deleteProduct(id: string) {
    this.productApiService.deleteProduct(id).subscribe(() => {
      this.productList = this.productList.filter((product) => product.publicId !== id);
    });
  }

  deleteCatalog(id: string) {
    this.productApiService.deleteCatalog(id).subscribe(() => {
      this.catalogList = this.catalogList.pipe(map((catalogs) => catalogs.filter((catalog) => catalog.publicId !== id)));
    });
  }
}
