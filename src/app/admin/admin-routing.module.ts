// admin-routing
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {ProductEditorComponent} from "./product-editor/product-editor.component";
import {CatalogEditorComponent} from "./catalog-editor/catalog-editor.component";

const routes: Routes = [
  {path: '', component: AdminHomeComponent},
  {path: 'product', children: [
      {path: 'new', component: ProductEditorComponent, data: {mode: 'new'}},
      {path: 'edit/:id', component: ProductEditorComponent, data: {mode: 'edit'}},
    ]},
  {
    path: 'catalog', children: [
      {path: 'new', component: CatalogEditorComponent, data: {mode: 'new'}},
      {path: 'edit/:id', component: CatalogEditorComponent, data: {mode: 'edit'}},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}

