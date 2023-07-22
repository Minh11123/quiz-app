import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import { TestService } from 'src/app/services/test.service';

import Swal from 'sweetalert2';
import {of} from "rxjs";

@Component({
  selector: 'app-startListeningExam',
  templateUrl: './startListeningExam.component.html',
  styleUrls: ['./startListeningExam.component.css'],
})
export class StartListeningExamComponent implements OnInit {
  quizId: any;
  questions:any;
  qindex=0;
  isSubmit= false;
  currentPage = 1;
  cateId: any;
  title:any;
  // //tổng điểm
  // marksGot = 0;

  // //số câu đúng
  // correctAnswers=0;

  // //số câu chọn
  // attempted = 0;

  testInfo={
    attempted:0,
    correctAnswers:0,
    marksGot:0,
    user:{
      username:""
    },
    quiz:{
      title:""
    }
  };

  timer:any;
  constructor(
    private locationSt: LocationStrategy,
    private activeRouter: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router,
    private testService: TestService
  ) {}


  ngOnInit(): void {
    // this.preventBackButton();
    this.quizId = this.activeRouter.snapshot.params.quizId;
    this.cateId =  this.activeRouter.snapshot.params.cateId;
    console.log("start xem cateID: " + this.cateId);
    this.title = this.activeRouter.snapshot.queryParamMap.get('title');
    this.getQuestions();
  }
  //không cho phép được quay lại trang cũ kể cả load lại trang cũng sẽ mất nut back
  preventBackButton() {
    history.pushState(null, '', location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }
  get pagedQuestions() {
    if(this.title ==="Từ vựng"){
      const startIndex = (this.currentPage - 1) * 10;
      const endIndex = startIndex + 10;
      return of(this.questions.slice(startIndex, endIndex));
    }else{
      const startIndex = (this.currentPage - 1) * 5;
      const endIndex = startIndex + 5;
      return of(this.questions.slice(startIndex, endIndex));
    }
  }
  pageChanged(page: number) {
    this.currentPage = page;
  }

  getQuestions() {
    this.questionService.getQuestionsOfQuizForTest(this.quizId).subscribe(
      (questions) => {
        this.questions = questions;
        this.timer = this.questions.length*60;
        this.startTimer();
      },
      (error) => {}
    );
  }


  completeQuiz(){
    localStorage.removeItem("timer");
    Swal.fire({
      title: 'Xác nhận nộp bài',
      showCancelButton: true,
      confirmButtonText: `Đồng ý`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.confirmTest();
      } else if (result.isDenied) {

      }
    })
  }
  nextQuestion(){
    this.currentPage = this.currentPage + 1;
    this.pageChanged(this.currentPage);
  }
  backQuestion(){
    this.currentPage = this.currentPage - 1;
    this.pageChanged(this.currentPage);
  }


  // confirmTest(){
  //   this.isSubmit = true;
  //   console.log(this.questions);
  //   this.testService.evalQuiz(this.questions).subscribe((data:any)=>{
  //     // this.correctAnswers = data.correctAnswers;
  //     // this.marksGot= parseFloat(Number(data.marksGot).toFixed(2));
  //     // this.attempted= data.attempted
  //     this.testInfo.correctAnswers = data.correctAnswers;
  //     this.testInfo.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
  //     this.testInfo.attempted = data.attempted;
  //     this.testInfo.user.username = data.user.username;
  //     this.testInfo.quiz.title = data.quiz.title;
  //
  //     console.log(data);
  //   },(error)=>{
  //
  //   })
  // }
  confirmTest(){
    this.isSubmit = true;
    console.log(this.questions);
    this.testService.evalQuiz(this.questions).subscribe((data:any)=>{
      this.testInfo.correctAnswers = data.correctAnswers;
      this.testInfo.marksGot = parseFloat(Number(data.marksGot).toFixed(2));
      this.testInfo.attempted = data.attempted;
      this.testInfo.user.username = data.user.username;
      this.testInfo.quiz.title = data.quiz.title;

      console.log(data);

      // Xóa timer khỏi localStorage khi hoàn thành bài kiểm tra
      localStorage.removeItem('timer');
    },(error)=>{

    },
      () => {
        // Xóa timer khỏi localStorage khi hoàn thành bài kiểm tra
        localStorage.removeItem('timer');
      })
  }


  // startTimer(){
  //
  //   let time = window.setInterval(()=>{
  //     if(this.timer<=0){
  //       this.confirmTest();
  //       clearInterval(time);
  //     }else{
  //       this.timer--;
  //       this.getFormattedTime();
  //     }
  //   },1000)
  // }
  startTimer(){
    // Lưu giá trị timer vào localStorage nếu chưa có
    if (localStorage.getItem('timer') === null) {
      localStorage.setItem('timer', JSON.stringify(this.timer));
    } else {
      // Lấy giá trị timer từ localStorage
      this.timer = JSON.parse(<string>localStorage.getItem('timer'));
    }

    let time = window.setInterval(()=>{
      if(this.timer <= 0){
        this.confirmTest();
        clearInterval(time);
        // Xóa timer khỏi localStorage khi hoàn thành bài kiểm tra
        localStorage.removeItem('timer');
      }
      if (!this.isSubmit){
        this.timer--;
        // Cập nhật giá trị timer trong localStorage
        localStorage.setItem('timer', JSON.stringify(this.timer));
        this.getFormattedTime();
      }
    }, 1000)
  }


  getFormattedTime(){
    let mm = Math.floor(this.timer/60)
    let ss = this.timer%60;
    // let ss = this.timer-mm*60 ntn cũng dc nè mà hơi loằng ngoằng;
    return `${mm} phút : ${ss} giây`;
  }
  printPage(){
    window.print();
  }

  showAnswer(){

  }
}
