import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import {documentService} from "../../../services/document.service";
import {CategoryService} from "../../../services/category.service";
import {of} from "rxjs";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents-user.html',
  styleUrls: ['./view-documents-user.css'],
})
export class ViewDocumentsUserComponent implements OnInit {
  cateId: any;
  type: any;
  documents: any;
  category:any;
  currentPage = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private documentService: documentService,
    private categoryService:CategoryService,
    private router: Router,
    private  loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.type = params.type;
      this.cateId = params.cateId;

      if (this.type == '1') {
        this.documentService.findAllDocument(this.cateId, 1).subscribe(
          (documents) => {
            this.documents = documents;
          },
          (error) => {
            Swal.fire('error!!', 'Hết phiên đăng nhập ! mời bạn đăng nhập lại !', 'error');
            this.loginService.logout();
          });
      }
      if (this.type == '2') {
        this.documentService.findAllDocument(this.cateId, 2).subscribe(
          (documents) => {
            this.documents = documents;
          },
          (error) => {
            Swal.fire('error!!', 'Hết phiên đăng nhập ! mời bạn đăng nhập lại !', 'error');
            this.loginService.logout();
          });
      }
      this.categoryService.findCategoryById(this.cateId).subscribe(
        (category) =>{
          this.category = category;
        },
        (error) => {
          Swal.fire('error!!', 'Hết phiên đăng nhập ! mời bạn đăng nhập lại !', 'error');
          this.loginService.logout();
        }
      )
    });
    console.log("view documents cateID:  " +  this.cateId );
    console.log("view documents type:  " +  this.type );

  }

  get pagedQuizzes() {
    const startIndex = (this.currentPage - 1) * 6;
    const endIndex = startIndex + 6;
    return of(this.documents.slice(startIndex, endIndex));
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
