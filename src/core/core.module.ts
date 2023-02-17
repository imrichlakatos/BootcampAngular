import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BannerComponent} from './banner/banner.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LoginComponent} from './login/login.component';

import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";



import {LifecycleHooksDemoComponent} from "./demo.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    LoginComponent,
    LifecycleHooksDemoComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    LoginComponent,
    LifecycleHooksDemoComponent,
  ]
})
export class CoreModule {
}
