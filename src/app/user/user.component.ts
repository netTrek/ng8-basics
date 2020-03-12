import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cis-user',
  templateUrl: './user.component.html',
/*  template: `
  <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  </ul>
  `,*/
  styleUrls: ['./user.styles.scss',
              './user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.ShadowDom
  /*styles: [`:host {
    display: block;
    background-color: red;
  }`]*/
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
