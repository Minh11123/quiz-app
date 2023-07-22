import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDocViewUpdateComponent } from './level-doc-view-update.component';

describe('LevelDocViewUpdateComponent', () => {
  let component: LevelDocViewUpdateComponent;
  let fixture: ComponentFixture<LevelDocViewUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelDocViewUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDocViewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
