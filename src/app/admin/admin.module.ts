// admin.module.ts
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {SharedModule} from "../../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import { CatalogEditorComponent } from './catalog-editor/catalog-editor.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    CatalogEditorComponent,
    ProductEditorComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule {
}
