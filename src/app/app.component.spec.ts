import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from './user/user';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ], imports: [
        UserModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'gfk2020-test'`, () => {
    expect(app.title).toEqual('gfk2020-test');
  });

  it(`should change title to 'gfk'`, () => {
    app.chgTitle();
    expect(app.title).toEqual('gfk');
  });

  fit(`should update users`, () => {
    const httpMock             = TestBed.get ( HttpTestingController );
    app.updateUser();
    const dummy: User[] = [
      {
        id       : 1,
        firstname: 'Mackenzie',
        lastname : 'Hodges',
        age      : 19
      }
    ];
    const testReques           = httpMock.expectOne ( 'http://localhost:3000/users' );
    testReques.flush( dummy );
    fixture.detectChanges();    const compiled = fixture.debugElement.nativeElement;

    expect(
      compiled.querySelector('div#first')
        .textContent).toContain('Mackenzie');
  });

  it(`should render changed title`, () => {
    app.chgTitle();
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('.content span')
        .textContent).toContain('gfk');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(
      compiled.querySelector('.content span')
        .textContent).toContain('gfk2020-test app is running!');
  });
});
