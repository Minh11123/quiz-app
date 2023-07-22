import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLevelViewComponent } from './quiz-level-view.component';

describe('LoadQuizComponent', () => {
  let component: QuizLevelViewComponent;
  let fixture: ComponentFixture<QuizLevelViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizLevelViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLevelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
