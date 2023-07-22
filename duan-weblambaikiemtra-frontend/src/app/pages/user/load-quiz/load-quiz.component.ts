import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {of} from "rxjs";
import {CategoryService} from "../../../services/category.service";
import Swal from "sweetalert2";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css'],
})
export class LoadQuizComponent implements OnInit {
  cateId: any;
  level:any;
  quizzes: any;
  category:any;
  currentPage = 1;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,
    private categoryService: CategoryService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    // this.cateId = this.activatedRoute.snapshot.params.cateId;
    this.activatedRoute.params.subscribe(params => {
      this.level = params.level;
      this.cateId = params.cateId;
      this.getCate();

      if (this.level == '1'){
        this.quizService.getAllQuizzesActiveOfCategoryLevel(this.cateId, 1).subscribe((quizzes) => {
          this.quizzes = quizzes;
        }, (error) => {
          Swal.fire('error!!', 'Hết phiên đăng nhập ! mời bạn đăng nhập lại !', 'error');
          this.loginService.logout();
        });
      }
      if (this.level == '2'){
        this.quizService.getAllQuizzesActiveOfCategoryLevel(this.cateId, 2).subscribe((quizzes) => {
          this.quizzes = quizzes;
        }, (error) => {
          Swal.fire('error!!', 'looxi cc j', 'error');
          // this.loginService.logout();
        });
      }


      // Thực hiện các hoạt động khác cần thiết với các giá trị mới


    });
    console.log("level load quiz: " + this.level);
    console.log("load quiz cateId " + this.cateId);
  }


  getCate(){
    this.categoryService.findCategoryById(this.cateId).subscribe(
      (category) =>{
        this.category = category;
      }
    )
  }
  get pagedQuizzes() {
      const startIndex = (this.currentPage - 1) * 6;
      const endIndex = startIndex + 6;
      return of(this.quizzes.slice(startIndex, endIndex));
  }
  pageChanged(page: number) {
    this.currentPage = page;
  }
  nextQuizzes(){
    this.currentPage = this.currentPage + 1;
    this.pageChanged(this.currentPage);
  }
  backQuizzes(){
    this.currentPage = this.currentPage - 1;
    this.pageChanged(this.currentPage);
  }
}
