import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  quizId: any;
  quiz:any;
  cateId:any
  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService:QuizService,
    private router:Router,
    private  loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params.quizId;
    this.cateId = this.activatedRoute.snapshot.params.cateId;
    this.getQuiz();
    console.log("instruction cateID: " + this.cateId)
  }

  getQuiz(){
    this.quizService.getQuizById(this.quizId).subscribe((quiz)=>{
        this.quiz = quiz;
    },(err)=>{})
  }

  startQuiz(){
    Swal.fire({
      title: 'Bắt đầu bài kiểm tra nhé ',
      showCancelButton: true,
      confirmButtonText: `Start`,
      icon: 'info',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (this.quiz.category.title === 'Bài nghe' || this.quiz.category.title === 'Ngữ pháp' ||this.quiz.category.title === 'Từ vựng' || this.quiz.category.title === 'Đọc hiểu' ){
          // this.router.navigate(['/startListeningExam/'+this.quizId ]);
          this.router.navigate(['/startListeningExam/'+this.quizId +"/" +this.cateId ], {queryParams :{ title: this.quiz.category.title}});
        }else {
          this.router.navigate(['/start/' + this.quizId]);
        }
      } else if (result.isDenied) {
        Swal.fire('error!!', 'Hết phiên đăng nhập ! mời bạn đăng nhập lại !', 'error');
        this.loginService.logout();
      }
    })
  }

}
