import { Directive, HostBinding, Input } from '@angular/core';
import {ProductApiService} from "../../app/product/products-api.service";

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  @Input() state: 'primary' | 'secondary' | 'danger' | 'tertiary' = 'primary';

  @HostBinding('class') get className() {
    switch (this.state) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
      case 'secondary':
        return 'bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded';
      case 'tertiary':
        return 'bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded';
      case 'danger':
        return 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
      default:
        return '';
    }
  }
}


// import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
//
// @Directive({
//   selector: '[appButton]'
// })
// export class ButtonDirective {
//   @Input() state: 'primary' | 'secondary' | 'danger' = 'primary';
//
//   constructor(private renderer: Renderer2, private el: ElementRef) {}
//
//   ngOnInit() {
//     const className = this.getClassName();
//     this.renderer.addClass(this.el.nativeElement, className);
//   }
//
//   private getClassName(): string {
//     switch (this.state) {
//       case 'primary':
//         return 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
//       case 'secondary':
//         return 'bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded';
//       case 'danger':
//         return 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded';
//       default:
//         return '';
//     }
//   }
// }
