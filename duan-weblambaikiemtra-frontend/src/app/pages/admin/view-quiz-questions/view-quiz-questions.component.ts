import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css'],
})
export class ViewQuizQuestionsComponent implements OnInit {
  quizId: any;
  quizTitle: any;
  questions: any = [];
  cateId: any;
  category:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.quizId = this.activatedRoute.snapshot.params.quizId;
    this.quizTitle = this.activatedRoute.snapshot.params.title;
    this.cateId = this.activatedRoute.snapshot.queryParams['type'];
    console.log(this.quizId, this.quizTitle);
    this.getQuestionsOfQuiz();
    this.getCate();
  }
  getCate(){
    this.categoryService.findCategoryById(this.cateId).subscribe(
      (category) =>{
        this.category = category;
      }
    )
  }

  getQuestionsOfQuiz() {
    this.questionService.getQuestionsOfQuizOfAdmin(this.quizId).subscribe(
      (questions) => {
        this.questions = questions;
        console.log(questions);
      },
      (error) => {
        Swal.fire('error!!', 'lỗi tải dữ liệu server', 'error');
      }
    );
  }

  deleteQuestion(id: any) {
    Swal.fire({
      icon: 'info',
      confirmButtonText: 'Xác nhận xoá',
      showCancelButton: true,
      title: 'chắc chưa',
    }).then((result) => {
      if (result.isConfirmed) {
        this.questionService.deleteQuestion(id).subscribe((data) => {
          Swal.fire('success', 'xoá thành công', 'success');
          this.questions = this.questions.filter((question: any) =>
            question.id != id
          );
        });
      }

      // this.questionService.deleteQuestion(id).subscribe((data) =>{
    });
  }
}
