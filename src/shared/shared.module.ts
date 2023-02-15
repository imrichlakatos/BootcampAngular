import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonDirective} from './button/button.directive';
import {ToasterComponent} from './toaster/toaster.component';

@NgModule({
  declarations: [
    ButtonDirective,
    ToasterComponent
  ],
  exports: [
    ButtonDirective,
    ToasterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
