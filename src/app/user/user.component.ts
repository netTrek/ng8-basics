import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector   : 'gfk-user',
  templateUrl: './user.component.html',
  // template: `<!--<ul><li>1</li><li>2</li><li>3</li></ul>-->`,
  styleUrls  : [ './user.component.scss' ],
  // styles: [`button {
  //   background-color: red;
  // }`],
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
  // encapsulation: ViewEncapsulation.Emulated
} )
export class UserComponent implements OnInit {

  name = 'saban';
  filename = 'cat1.jpeg';
  btnRole = 'button';
  fontColor = 'red';
  catSize = 50;
  html = `hello <strong>world</strong>! <script>alert('hab dich .....')</script>`;
  currentClass = 'red';
  selected: string;

  constructor() {
  }

  ngOnInit() {
  }

  chgName() {
    // debugger
    this.name = 'peter müller';
    this.filename = 'cat2.jpeg';
    this.fontColor = 'blue';
  }
/*
  // wenn möglich ohne Methoden
  getName(): string {
    console.log ( 'getName' );
    return this.name;
  }*/
  toggleClass() {
    this.currentClass =
      this.currentClass === 'red' ?
      'blue' : 'red';
  }

  select( name: string ) {
    this.selected = name;
  }
}
