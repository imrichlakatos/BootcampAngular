import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductApiService} from "../../product/products-api.service";
import {ToasterService} from "../../../shared/toaster/toaster.service";
import {Catalog} from "../../product/models/catalog";

@Component({
  selector: 'app-catalog-editor',
  templateUrl: './catalog-editor.component.html',
  styleUrls: ['./catalog-editor.component.scss']
})
export class CatalogEditorComponent implements OnInit {

  pageTitle = 'New Product';
  mode: 'new' | 'edit' = 'new';
  catalogId: string | null = null;

  get nameControl() {
    return this.catalogFormGroup.get('name');
  }

  get descriptionControl() {
    return this.catalogFormGroup.get('description');
  }

  catalogFormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.maxLength(50)]],
  });

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
              private productService: ProductApiService,
              private toasterService: ToasterService,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.mode = this.route.snapshot.data['mode'];
    this.pageTitle = this.mode === 'new' ? 'New Product' : 'Edit Product';
    if (this.mode === 'edit') {
      this.catalogId = this.route.snapshot.params['id'];
      this.productService.getCatalog(this.catalogId!).subscribe((product) => {
        this.catalogFormGroup.patchValue(product);
      });
    }
  }

  submit() {
    if (this.catalogFormGroup.invalid) {
      this, this.catalogFormGroup.markAllAsTouched();
      return;
    }
    if (this.mode === 'new') {
      const payload = this.catalogFormGroup.value;
      this.productService.createCatalog(<Catalog>payload).subscribe(() => {
        this.catalogFormGroup.reset();
        this.toasterService.show('Catalog created successfully');
      });
    } else {
      const payload = this.catalogFormGroup.value;
      this.productService.updateCatalog(this.catalogId!, <Catalog>payload).subscribe(() => {
        this.toasterService.show('Catalog updated successfully');
        this.router.navigate(['admin']);
      });
    }
  }
}
