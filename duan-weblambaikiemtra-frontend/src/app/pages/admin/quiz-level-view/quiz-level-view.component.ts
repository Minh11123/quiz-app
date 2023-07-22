import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './quiz-level-view.component.html',
  styleUrls: ['./quiz-level-view.component.css'],
})
export class QuizLevelViewComponent implements OnInit {
  cateId: any;
  quizzes: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService,

  ) {}

  ngOnInit(): void {
    this.cateId = this.activatedRoute.snapshot.params.cateId;

  }
}
