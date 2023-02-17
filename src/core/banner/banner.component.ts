import {Component} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  username: string;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.username = this.userService.getUserName()!;
  }
}
