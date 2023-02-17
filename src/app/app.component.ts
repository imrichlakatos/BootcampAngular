import {Component} from '@angular/core';
import {ToasterService} from "../shared/toaster/toaster.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  testData: any;
  constructor(private toasterService: ToasterService) {
  }

  changeInput() {
    this.testData = new Date().getTime();
  }
}
