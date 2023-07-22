import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  getQuestionsOfQuizOfAdmin(quizId:any){
      return this.http.get(`${environment.baseUrl}/question/quiz/all/${quizId}`);
  }

  getQuestionsOfQuizForTest(quizId:any){
    return this.http.get(`${environment.baseUrl}/question/quiz/${quizId}`);
  }
  getQuestionsOfQuizForTestListening(quizId:any){
    return this.http.get(`${environment.baseUrl}/question/quiz/listen/${quizId}`);
  }


  addQuestion(question:any){
    return this.http.post(`${environment.baseUrl}/question`,question);
  }

  deleteQuestion(id:any){
    return this.http.delete(`${environment.baseUrl}/question/${id}`);
  }

  //Eval - quiz
  evalQuiz(questions:any){
    return this.http.post(`${environment.baseUrl}/question/eval-quiz`,questions);
  }
  getQuestionById(id:any){
    return this.http.get(`${environment.baseUrl}/question/${id}`);
  }

  updateQuestion(question:any){
    return this.http.put(`${environment.baseUrl}/question`,question);
  }

}
