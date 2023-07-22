import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelDocViewUpdateCategories } from './level-doc-view-update-categories';

describe('LevelDocViewUpdateCategories', () => {
  let component: LevelDocViewUpdateCategories;
  let fixture: ComponentFixture<LevelDocViewUpdateCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelDocViewUpdateCategories ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelDocViewUpdateCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
