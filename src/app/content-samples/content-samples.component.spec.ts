import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSamplesComponent } from './content-samples.component';

describe('ContentSamplesComponent', () => {
  let component: ContentSamplesComponent;
  let fixture: ComponentFixture<ContentSamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
