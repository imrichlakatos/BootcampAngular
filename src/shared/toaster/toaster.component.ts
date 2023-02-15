import {Component} from '@angular/core';
import {ToasterService} from "./toaster.service";

@Component({
  selector: 'app-toaster',
  template: `
    <div *ngIf="message" class="fixed top-10 right-10 rounded p-4 bg-teal-500 text-white">
      {{ message }}
    </div>
  `,
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {
  message: string | null;

  constructor(private toasterService: ToasterService) {
    this.toasterService.getMessage().subscribe(message => {
      this.message = message;
    });
  }
}
