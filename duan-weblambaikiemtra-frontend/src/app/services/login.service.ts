import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginStatusSubject = new Subject<Boolean>();

  constructor(private http:HttpClient, public router: Router) { }

  getCurrentUser(){
    return this.http.get(`${environment.baseUrl}/current-user`);
  }

  generateToken(user:any){

    return this.http.post(`${environment.baseUrl}/generate-token`,user);

  }

  loginUser(token:any){

    localStorage.setItem('token',token);
    return true;
  }

  isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr==undefined||tokenStr==null||tokenStr==""){
      this.router.navigate(["/navbar"]);
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    console.log("vao logout");
    localStorage.removeItem('token');
    localStorage.removeItem("user");
    localStorage.removeItem("timer");
    this.loginStatusSubject.next(false);
    this.router.navigate([""]);
    return true;
  }

  getToken(){
    return localStorage.getItem('token');
  }

  setUser(user:any){
      localStorage.setItem("user",JSON.stringify(user));
  }

  getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr!==null){
      return JSON.parse(userStr);
    }
    else{
      // this.logout();
      return null;
    }
  }

  getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }


}
