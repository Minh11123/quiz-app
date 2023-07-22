import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  quizzes(level:any){
    return this.http.get(`${environment.baseUrl}/quiz/level/${level}`);
  }

  addQuiz(quiz:any,level:any){
    return this.http.post(`${environment.baseUrl}/quiz/${level}`,quiz);
  }

  deleteQuiz(id:any){
    return this.http.delete(`${environment.baseUrl}/quiz/${id}`);
  }
  getQuizById(id:any){
    return this.http.get(`${environment.baseUrl}/quiz/${id}`);
  }

  updateQuiz(quiz:any){
    return this.http.put(`${environment.baseUrl}/quiz`,quiz);
  }

  getQuizzesOfCategory(cateId:any){
    return this.http.get(`${environment.baseUrl}/quiz/category/${cateId}`);
  }

  getActiveQuizzes(){
    return this.http.get(`${environment.baseUrl}/quiz/active`);
  }

  getActiveQuizzesOfCategory(cateId:any){
    return this.http.get(`${environment.baseUrl}/quiz/category/active/${cateId}`);
  }
  getAllQuizzesActiveOfCategoryLevel(cateId:any,level:any){
    return this.http.get(`${environment.baseUrl}/quiz/category/active/level/${cateId}/${level}`);
  }
}
