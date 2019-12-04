import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  send( value: any ) {
    console.log ( 'sending data', value );
  }
}
