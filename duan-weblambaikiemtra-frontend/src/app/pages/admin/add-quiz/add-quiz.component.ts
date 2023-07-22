import { QuizService } from './../../../services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  quiz = {
    title: '',
    description: ' ',
    maxMarks: ' ',
    numberOfQuestion: ' ',
    active: true,
    category: {},
  };
  type: any;
  cateId:any;
  category:any;
  level:any;

  categories: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService,
    private snackBar: MatSnackBar,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.type = this.activatedRoute.snapshot.queryParams['type'];
    if (this.type ==="level1"){
      this.level = 1;
    }
    if (this.type ==="level2"){
      this.level = 2;
    }
    // this.cate = this.activatedRoute.snapshot.queryParams['cate'];
    this.cateId = JSON.parse(this.activatedRoute.snapshot.queryParams['cate']);
    if (this.cateId){
      this.getCate();
    }
  }
  getCate(){
    this.categoryService.findCategoryById(this.cateId).subscribe(
      (category) =>{
        this.quiz.category = category;
        this.category = category;
      }
    )
  }

  getAllCategory() {
    this.categoryService.categories().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (error) => {
        Swal.fire('error!!', 'lỗi load dữ liệu server', 'error');
      }
    );
  }

  addQuiz() {
    console.log(this.quiz);
    if (this.type ==="level1"){
      this.level = 1;
    }
    if (this.type ==="level2"){
      this.level = 2;
    }
      this.quizService.addQuiz(this.quiz, this.level).subscribe((quiz) => {
        Swal.fire('Sussess!!', 'tạo mới quiz thành công', 'success');
        this.quiz = {
          title: '',
          description: ' ',
          maxMarks: ' ',
          numberOfQuestion: ' ',
          active: true,
          category: {},
        };
      });
  }
}
