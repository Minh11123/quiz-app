import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocumentLevelComponent } from './view-document-level.component';

describe('ViewDocumentLevelComponent', () => {
  let component: ViewDocumentLevelComponent;
  let fixture: ComponentFixture<ViewDocumentLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocumentLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocumentLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ok chua', () => {
    expect(component).toBeTruthy();
  });
});
