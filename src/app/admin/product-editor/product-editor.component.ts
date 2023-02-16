import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductApiService} from "../../product/products-api.service";
import {Catalog} from "../../product/models/catalog";
import {ToasterService} from "../../../shared/toaster/toaster.service";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit {

  mode: 'new' | 'edit' = 'new';
  pageTitle = 'New Product';
  productId: string | null = null;

  nameControl = new FormControl('Imro',
    { nonNullable: true,
      validators: [Validators.required, Validators.minLength(3)]
    });
  priceControl = new FormControl(0, {
    nonNullable: true,
    validators: [Validators.pattern("[0-9]+"), Validators.required, Validators.min(1)],
  });
  catalogControl = new FormControl('', {nonNullable: true, validators: [Validators.required]});
  descriptionControl = new FormControl('', {nonNullable: true, validators: [Validators.maxLength(50)], updateOn: 'change'});
  productFormGroup = new FormGroup({
    name: this.nameControl,
    price: this.priceControl,
    catalog: this.catalogControl,
    description: this.descriptionControl,
  });

  availableCatalogs: Catalog[];

  constructor(private route: ActivatedRoute,
              private productService: ProductApiService,
              private toasterService: ToasterService,
              private router: Router) {
  }

  ngOnInit() {
    this.mode = this.route.snapshot.data['mode'];
    this.pageTitle = this.mode === 'new' ? 'New Product' : 'Edit Product';
    this.getAvailableCatalogs();
    if (this.mode === 'edit') {
      this.productId = this.route.snapshot.params['id'];
      this.productService.getProduct(this.productId!).subscribe((product) => {
        this.nameControl.setValue(product.name);
        this.priceControl.setValue(product.price);
        this.descriptionControl.setValue(product.description);
      });
    }
  }

  getAvailableCatalogs() {
    this.productService.getCatalogs().subscribe((catalogs) => {
      this.availableCatalogs = catalogs;
    });
  }

  setValue() {
    this.nameControl.setValue('New Value');
    this.priceControl.setValue(100);
    this.descriptionControl.setValue('New Description');
  }

  submit() {
    console.log(this.productFormGroup);
    if (this.productFormGroup.invalid) {
      this.productFormGroup.markAllAsTouched();
      return;
    }
    if (this.mode === 'new') {
      const catalogId = this.catalogControl.value;
      const payload = this.getFormValue();
      this.productService.createProduct(catalogId, payload).subscribe(() => {
        this.toasterService.show('Congratulations! Product created!');
        this.productFormGroup.reset()
      });
    } else {
      const payload = this.getFormValue();
      this.productService.updateProduct(this.productId!, payload).subscribe(() => {
        this.toasterService.show('Congratulations! Product updated!');
        this.router.navigateByUrl(`/admin`);
      });
    }
  }

  getFormValue() {
    return {
      name: this.nameControl.value,
      price: this.priceControl.value,
      description: this.descriptionControl.value,
    }
  }

  getNameValidationMessage() {
    if (this.nameControl.hasError('required')) {
      return 'Name is required';
    }
    if (this.nameControl.hasError('minlength')) {
      return 'Name must be at least 3 characters long';
    }
    return '';
  }
}
