import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  evalQuiz(questions:any){
    return this.http.post(`${environment.baseUrl}/test`,questions);
  }
  deleteTest(id: any){
    return this.http.delete(`${environment.baseUrl}/test/test?id=${id}`);
  }
  getTest(id:any){
    return this.http.get(`${environment.baseUrl}/test/findByUser/${id}`);
  }
}
