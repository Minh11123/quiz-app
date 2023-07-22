import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export  class documentService{
  constructor(private http: HttpClient) { }

  findAllDocument(cateId:any,level:any){
    return this.http.get(`${environment.baseUrl}/document/${cateId}/${level}`);
  }
  document(document:any){
    return this.http.post(`${environment.baseUrl}/document`,document);
  }
  delete(id:any){
    return this.http.delete(`${environment.baseUrl}/document/${id}`);
  }

  update(document:any){
    return this.http.put(`${environment.baseUrl}/document`,document);
  }
  findById(id:any){
    return this.http.get(`${environment.baseUrl}/document/${id}`,id);
  }
}
