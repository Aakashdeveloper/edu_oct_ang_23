import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSubmitComponent } from './after-submit.component';

describe('AfterSubmitComponent', () => {
  let component: AfterSubmitComponent;
  let fixture: ComponentFixture<AfterSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterSubmitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
