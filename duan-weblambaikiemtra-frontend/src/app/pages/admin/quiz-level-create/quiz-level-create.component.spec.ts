import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLevelCreateComponent } from './quiz-level-create.component';

describe('LoadQuizComponent', () => {
  let component: QuizLevelCreateComponent;
  let fixture: ComponentFixture<QuizLevelCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizLevelCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizLevelCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
