import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './quiz-level.component.html',
  styleUrls: ['./quiz-level.component.css'],
})
export class QuizLevelComponent implements OnInit {
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
