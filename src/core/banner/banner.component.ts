import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  username: string;
  isLoggedIn: boolean;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.isLoggedIn$.subscribe((isLoggedIn) => {
        this.isLoggedIn = isLoggedIn;
        this.username = this.userService.getUserName()!;
    });
    // this.isLoggedIn = this.userService.isLoggedIn();
    // this.username = this.userService.getUserName()!;
  }
}
