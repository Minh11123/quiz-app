import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import {QuestionService} from "../../../services/question.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {documentService} from "../../../services/document.service";
import {CategoryService} from "../../../services/category.service";


@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css'],
})
export class UpdateDocumentComponent implements OnInit {

  public Editor = ClassicEditor;
  categories : any;
  document = {
    id: '',
    content: '',
    category: {},
    level: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private documentService: documentService,
    private categoryService: CategoryService,
    private router:Router
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.getDocument(id);
    this.getAllCategory();
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

  getDocument (id: any) {
    this.documentService.findById(id).subscribe(
      (document:any) => {
        this.document = document;
      },
      (error) => {
        Swal.fire('error!!', 'có lỗi gì đó rồi', 'error');
      }
    );
  }

  updateDocument() {
    this.documentService.update(this.document).subscribe((data) => {
        Swal.fire('susscess!!', 'update document thành công', 'success').then((result)=>{
          this.router.navigate(['/admin/view-document/']);
        });
      },
      (err) => {  Swal.fire('error!!', 'có lỗi gì đó rồi', 'error');}
    )
  }
}
