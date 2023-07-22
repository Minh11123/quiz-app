import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css'],
})
export class ViewQuizzesComponent implements OnInit {
  quizzes: any ;
  type:any;
  typeTitle:any;
  cateId:any;
  currentPage = 1;
  category:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categorySerivce:CategoryService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.params.type;
    this.cateId = this.activatedRoute.snapshot.params.cateId;
    this.getAllQuizzes();
    this.getCategory();
    if (this.type === '1'){
      this.typeTitle = 'level1';
    }else {
      this.typeTitle = 'level2';
    }

  }

  getAllQuizzes() {
      this.quizService.getAllQuizzesActiveOfCategoryLevel(this.cateId,this.type).subscribe(
        (quizzes) => {
          this.quizzes = quizzes;
          console.log(quizzes);
        },
        (err) => {
          Swal.fire('error!', 'Errorloadingdata!', 'error');
        }
      );
  }
  getCategory(){
    this.categorySerivce.findCategoryById(this.cateId).subscribe(
      (cate:any) =>{
        this.category = cate;
      }
    )
  }
  get pagedQuizzes() {
    const startIndex = (this.currentPage - 1) * 4;
    const endIndex = startIndex + 4;
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

  // deleteQuiz(id: any) {
  //   this.quizService.deleteQuiz(id).subscribe(
  //     (data) => {
  //       this.quizzes = this.quizzes.filter((q:any) => q.id != id)
  //       Swal.fire('success!!', 'xoá quiz thành công', 'success');
  //     },
  //     (err) => {
  //       Swal.fire('error!!', 'có lỗi gì đó rùi', 'error');
  //     }
  //   );
  // }

  deleteQuiz(id: any) {
    Swal.fire({
      icon: 'info',
      title: 'xác nhận xoá ',
      confirmButtonText: 'Xoá',
      showCancelButton: true,
      cancelButtonText: 'quay lại',
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.deleteQuiz(id).subscribe(
          (data) => {
            this.quizzes = this.quizzes.filter((q: any) => q.id != id);
            Swal.fire('success!!', 'xoá quiz thành công', 'success');
          },
          (err) => {
            Swal.fire('error!!', 'có lỗi gì đó rùi', 'error');
          }
        );
      }

      //trường hợp mà huỷ thì vào đây cũng dc
      // if(result.isDismissed){
      //   alert("ahihi test cái")
      // }
    });
    // this.quizService.deleteQuiz(id).subscribe(
    //   (data) => {
    //     this.quizzes = this.quizzes.filter((q:any) => q.id != id)
    //     Swal.fire('success!!', 'xoá quiz thành công', 'success');
    //   },
    //   (err) => {
    //     Swal.fire('error!!', 'có lỗi gì đó rùi', 'error');
    //   }
    // );
  }
}
