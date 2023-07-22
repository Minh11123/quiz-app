import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from "./services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'duan-demo-frontend';

  constructor(public loginService: LoginService, private router: Router) {
    // this.login();
  }
  ngOnInit(): void {
    // this.login();
  }
  login() {
    if (!this.loginService.isLoggedIn()) {
      this.router.navigate(['']);
    }else {
      this.router.navigate(["/user-dashboard"]);
    }
  }

}
