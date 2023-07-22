import {Component, Inject, OnInit, Renderer2,ViewEncapsulation } from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: [
    './user-dashboard.component.css',

  ],
  encapsulation: ViewEncapsulation.Emulated

})
export class UserDashboardComponent implements OnInit {

  user = {
    id: '',
    email : '',
    firstname: '',
    lastname: '',
    username: '',
    avatar :'',
    password: '',
    phone: '',
    roles : []
  }
  constructor(public loginService: LoginService, public router: Router,
              private renderer2: Renderer2,
              @Inject(DOCUMENT) private document: Document) {
  }
  ngOnInit(): void {
    if (!this.loginService.isLoggedIn()){
      this.router.navigate([""]);
    }
    this.user = this.loginService.getUser();
    console.log(this.user);
  }
  logout(){
    this.loginService.logout();
    // this.router.navigate([""]);
    this.loginService.loginStatusSubject.next(false);
    // window.location.reload();
  }


}
