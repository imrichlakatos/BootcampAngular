import {Component} from '@angular/core';
import {ToasterService} from "../shared/toaster/toaster.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  constructor(private toasterService: ToasterService) {
  }
}
