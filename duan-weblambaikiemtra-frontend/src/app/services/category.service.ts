import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  categories(){
    return this.http.get(`${environment.baseUrl}/categories`);
  }
  findCategoryById(id:any){
    return this.http.get(`${environment.baseUrl}/categories/${id}`);
  }

  addCategory(category:any){
    return this.http.post(`${environment.baseUrl}/categories`,category);
  }


}


