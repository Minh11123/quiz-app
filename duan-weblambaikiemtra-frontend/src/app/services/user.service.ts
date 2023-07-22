import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import {environment} from "../../environments/environment";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,) { }

  addUser(user: any){
    return this.http.post(`${environment.baseUrl}/user/signup`,user)
  }

  updateUser(user:any){
    return this.http.put(`${environment.baseUrl}/user`,user);
  }
}
