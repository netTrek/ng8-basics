import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component ( {
  selector       : 'msg-user',
  templateUrl    : './user.component.html',
  // template: `<strong>hello</strong> world`,
  styleUrls      : ['./user.component.scss']
  // styles: [`h1 { color: red}`]
  // , encapsulation: ViewEncapsulation.ShadowDom
} )
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor() {
  }

  ngOnInit() {
  }

  chgName() {
    this.name = 'Peter Müller';
  }
}
