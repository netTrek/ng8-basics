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

  constructor() {
  }

  ngOnInit() {
  }
}
