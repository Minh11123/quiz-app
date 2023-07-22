import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import {QuestionService} from "../../../services/question.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css'],
})
export class UpdateQuestionComponent implements OnInit {

  public Editor = ClassicEditor;
  quizTitle:any;
  question  = {
    id: "",
    content:"",
    image: "",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:""
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private questionService: QuestionService,
    private router:Router
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.getQuestion(id);
    this.quizTitle = this.activatedRoute.snapshot.params.quizTitle;
  }

  getQuestion (id: any) {
    this.questionService.getQuestionById(id).subscribe(
      (question:any) => {
        this.question = question;
        console.log(this.question);
      },
      (error) => {
        Swal.fire('error!!', 'có lỗi gì đó rồi', 'error');
      }
    );
  }

  updateQuestion() {
    this.questionService.updateQuestion(this.question).subscribe((data) => {
        Swal.fire('susscess!!', 'update question thành công', 'success').then((result)=>{
          this.router.navigate(['/admin/view-questions/', this.question.id]);
        });
      },
      (err) => {  Swal.fire('error!!', 'có lỗi gì đó rồi', 'error');}
    )
  }
}
