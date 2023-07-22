import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level-doc-view',
  templateUrl: './level-doc-view.component.html',
  styleUrls: ['./level-doc-view.component.css'],
})
export class LevelDocViewComponent implements OnInit {
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
