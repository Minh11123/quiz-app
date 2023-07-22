import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocumentsUserComponent } from './view-documents-user.component';

describe('ViewDocumentsUserComponent', () => {
  let component: ViewDocumentsUserComponent;
  let fixture: ComponentFixture<ViewDocumentsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDocumentsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDocumentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
