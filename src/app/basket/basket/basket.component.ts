import {Component} from '@angular/core';
import {ToasterService} from "../../../shared/toaster/toaster.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {

  constructor(private toasterService: ToasterService) {
  }

  order() {
    console.warn('Method not implemented');
    this.toasterService.show('Congratulations, your order is placed');
  }
}
