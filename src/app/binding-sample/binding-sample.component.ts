import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'gfk-binding-sample',
  templateUrl: './binding-sample.component.html',
  styleUrls  : [ './binding-sample.component.scss' ]
} )
export class BindingSampleComponent implements OnInit {
  val   = 'world';
  num   = 1;
  obj   = { name: 'saben', age: 44 };
  file  = 'cat1.jpeg';
  html  = 'hello <strong>world</strong><script>alert("hab dich")</script>';
  color = 'red';
  count = 0;
  private intervalID: number;

  constructor() {
  }

  width      = 200;
  ariaLabel  = 'Beschreibung zum Artikel';
  classlist  = 'outer';
  isSelected = true;

  ngOnInit() {

    this.intervalID = window.setInterval ( () => {
      console.log ( this.count ++ );
      if ( this.count === 10 ) {
        window.clearInterval ( this.intervalID );
        this.intervalID = undefined;
      }
    }, 100 );

  }

  getNum(): number {
    console.log ( 'calc' );
    return 123;
  }

  getSum( num: number ) {
    return num + 100;
  }

  btnClick( mouse: MouseEvent ) {
    console.log ( 'clicked', mouse );
  }

  toggle() {
    this.isSelected = !this.isSelected;
    if ( this.classlist !== 'inner' ) {
      this.classlist = 'inner';
    } else {
      this.classlist = 'outer';
    }
  }
}
