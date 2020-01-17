import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAComponent } from './modal-a.component';

describe('ModalAComponent', () => {
  let component: ModalAComponent;
  let fixture: ComponentFixture<ModalAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
