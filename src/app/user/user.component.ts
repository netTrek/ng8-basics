import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  chgName() {
    this.name = 'Peter Müller';
  }
}
