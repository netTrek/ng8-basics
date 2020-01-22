import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingSampleComponent } from './binding-sample.component';

describe('BindingSampleComponent', () => {
  let component: BindingSampleComponent;
  let fixture: ComponentFixture<BindingSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
