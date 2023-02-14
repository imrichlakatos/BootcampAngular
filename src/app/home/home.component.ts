import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CoreModule} from "../../core/core.module";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CoreModule],
  template: '<app-banner></app-banner>',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
