import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) {
  }

  goToAdmin() {
    const user = {id: 3};
    // this.router.navigate(['admin', user.id]).catch();
    this.router.navigateByUrl('admin').catch();
  }
}
