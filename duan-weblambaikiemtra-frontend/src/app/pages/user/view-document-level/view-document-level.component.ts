import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document-level.component.html',
  styleUrls: ['./view-document-level.component.css'],
})
export class ViewDocumentLevelComponent implements OnInit {
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
