import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryDocument } from './view-category-document';

describe('ViewCategoryDocument', () => {
  let component: ViewCategoryDocument;
  let fixture: ComponentFixture<ViewCategoryDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategoryDocument ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryDocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
