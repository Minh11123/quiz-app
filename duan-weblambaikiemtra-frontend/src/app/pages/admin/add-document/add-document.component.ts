import { WelcomeComponent } from './../welcome/welcome.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';
import {CategoryService} from "../../../services/category.service";
import {documentService} from "../../../services/document.service";

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.css']
})
export class AddDocumentComponent implements OnInit {
  public Editor = ClassicEditor;
  document = {
    content: '',
    category: {},
    level: ''
  }
  categories: any;
  type:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private documentService: documentService,
    private router:Router,
    private categoryService: CategoryService,
    ) { }

  ngOnInit(): void {

    this.getAllCategory();
    this.type = this.activatedRoute.snapshot.queryParams['type'];
    // this.question.quiz.id=this.quizId;
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
  addDocument(){
    if (this.type === "level1"){
      // @ts-ignore
      this.document.level = 1;
    }
    if (this.type === "level2"){
      // @ts-ignore
      this.document.level = 2;
    }
    this.documentService.document(this.document).subscribe((document) =>{
      Swal.fire( { icon: 'info',
          title: 'Thêm thành công',
          confirmButtonText: 'Tiếp tục',
          showCancelButton: true,
          cancelButtonText: 'Quay lại quản lý doc',})
          .then((result)=>{
            if(result.isDismissed){
              this.router.navigate(["/admin"]);
            }
          });
      },
    (error)=>{
      Swal.fire("error!!","có lỗi gì đó rùi","error");
    })

    // this.questionService.addQuestion(this.question).subscribe((question)=>{
    //   Swal.fire( { icon: 'info',
    //   title: 'Thêm thành công',
    //   confirmButtonText: 'Tiếp tục',
    //   showCancelButton: true,
    //   cancelButtonText: 'Quay lại quản lý quiz',})
    //   .then((result)=>{
    //     if(result.isDismissed){
    //       this.router.navigate(["/admin/quizzes"]);
    //     }
    //   });
    //
    // },
    // (error)=>{
    //   Swal.fire("error!!","có lỗi gì đó rùi","error");
    // })
  }

}
