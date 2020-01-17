import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@Component ( {
  selector   : 'gfk-user', // Knoten-Name innerhalb der HTML
  templateUrl: './user.component.html',
  /*  template: `
      <h1>
        hello {{name}}
      </h1>
      <h2>world</h2>
    `,*/
  styleUrls  : [ './user.component.scss' ],
  // encapsulation: ViewEncapsulation.Emulated // attribute -def.
  // encapsulation: ViewEncapsulation.None // ohne attrib. nutzung
  // encapsulation: ViewEncapsulation.ShadowDom
  /*  styles: [ `
              h1 {
                color: red;
              }
              `]*/
} )
export class UserComponent implements OnInit {
  name = 'Saban';

  // @ViewChild ( UserListComponent, {static: true} )
  // userList: UserListComponent;
  //
  // @ViewChild ( 'ueberschrift' , {static: true})
  // ueberschrift: ElementRef<HTMLHeadingElement>;

  constructor() {
  }

  ngOnInit() {
    // console.log ( this.userList, this.ueberschrift.nativeElement );
  }

  chgName() {
    this.name = 'Peter Müller';
  }
/*
  valueOfInput( value: string ) {
    console.log ( 'input wert ist', value );
  }
  */
}
