import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartListeningExamComponent } from './startListeningExam.component';

describe('StartListeningExamComponent', () => {
  let component: StartListeningExamComponent;
  let fixture: ComponentFixture<StartListeningExamComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartListeningExamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartListeningExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
