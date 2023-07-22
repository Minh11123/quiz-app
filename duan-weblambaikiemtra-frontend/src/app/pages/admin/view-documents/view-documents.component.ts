import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import {documentService} from "../../../services/document.service";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-view-documents',
  templateUrl: './view-documents.html',
  styleUrls: ['./view-documents.css'],
})
export class ViewDocumentsComponent implements OnInit {
  cateId: any;
  type: any;
  documents: any = [];
  category:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private documentService: documentService,
    private router: Router,
    private categoryService:CategoryService
  ) {}

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.params.type;
    this.cateId = this.activatedRoute.snapshot.params.cateId;
    this.getDocumentsOfCategory();
    this.getCate();
  }
  getCate(){
    this.categoryService.findCategoryById(this.cateId).subscribe(
      (category) =>{
        this.category = category;
      }
    )
  }

  getDocumentsOfCategory() {
    this.documentService.findAllDocument(this.cateId, this.type).subscribe(
      (documents) => {
        this.documents = documents;
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
        this.documentService.delete(id).subscribe((data) => {
          Swal.fire('success', 'xoá thành công', 'success');
          this.documents = this.documents.filter((document: any) =>
            document.id != id
          );
        });
      }

      // this.questionService.deleteQuestion(id).subscribe((data) =>{
    });
  }
}
