import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSampleComponent } from './pipe-sample.component';

describe('PipeSampleComponent', () => {
  let component: PipeSampleComponent;
  let fixture: ComponentFixture<PipeSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
