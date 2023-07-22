import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HskComponent } from './hsk.component';

describe('HskComponent', () => {
  let component: HskComponent;
  let fixture: ComponentFixture<HskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
