import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './quiz-level-create.component.html',
  styleUrls: ['./quiz-level-create.component.css'],
})
export class QuizLevelCreateComponent implements OnInit {
  cateId: any;
  quizzes: any;
  type: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,

  ) {}

  ngOnInit(): void {
    this.cateId = this.activatedRoute.snapshot.params.cateId;
    this.type = this.activatedRoute.snapshot.queryParams['type'];
  }
}
