import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-level-doc-view-update',
  templateUrl: './level-doc-view-update.component.html',
  styleUrls: ['./level-doc-view-update.component.css'],
})
export class LevelDocViewUpdateComponent implements OnInit {
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
