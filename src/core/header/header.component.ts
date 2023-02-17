import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {UserService} from "../services/user.service";
import {BannerComponent} from "../banner/banner.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private router: Router,
              public dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn();
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, { // LoginComponent
      width: '275px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      const {username, password} = result;
      if (username && password) {
        this.userService.login(username);
      }

      this.isLoggedIn = this.userService.isLoggedIn();
    });
  }

  goToAdmin() {
    this.router.navigateByUrl('admin').catch();
  }

  logout() {
    this.userService.logout();
    this.isLoggedIn = this.userService.isLoggedIn();
  }
}
