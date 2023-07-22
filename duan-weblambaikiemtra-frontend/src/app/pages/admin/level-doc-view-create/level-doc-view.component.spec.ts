import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDocViewComponent } from './level-doc-view.component';

describe('LevelDocViewComponent', () => {
  let component: LevelDocViewComponent;
  let fixture: ComponentFixture<LevelDocViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelDocViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDocViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
