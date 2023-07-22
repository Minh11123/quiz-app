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
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css'],
})
export class ViewDocumentComponent implements OnInit {
  public Editor = ClassicEditor;
  document = {
    id: '',
    content: '',
    category: {},
    level: ''
  }
  id: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private documentService: documentService,
    private router:Router
  ) {}

  ngOnInit(): void {
    console.log("document: " + document);
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.documentService.findById(this.id).subscribe(
        (document: any) => {
          this.document = document;
          console.log("document: " + document);
        },
        (error) => {
          Swal.fire('error!!', 'có lỗi gì đó rồi', 'error');
        }
      );
    })
    console.log("only view document id:  + id");
  }



}
