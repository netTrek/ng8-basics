import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveSampleComponent } from './directive-sample.component';

describe ( 'DirectiveSampleComponent', () => {
  let component: DirectiveSampleComponent;
  let fixture: ComponentFixture<DirectiveSampleComponent>;

  beforeEach ( async ( () => {
    TestBed.configureTestingModule ( {
      declarations: [DirectiveSampleComponent]
    } )
           .compileComponents ();
  } ) );

  beforeEach ( () => {
    fixture   = TestBed.createComponent ( DirectiveSampleComponent );
    component = fixture.componentInstance;
    fixture.detectChanges ();
  } );

  it ( 'should create', () => {
    expect ( component )
      .toBeTruthy ();
  } );
} );
