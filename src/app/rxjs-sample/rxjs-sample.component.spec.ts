import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsSampleComponent } from './rxjs-sample.component';

describe('RxjsSampleComponent', () => {
  let component: RxjsSampleComponent;
  let fixture: ComponentFixture<RxjsSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
