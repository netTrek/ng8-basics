import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component ( {
  selector   : 'msg-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit {
  // werte werden von außen (Eltern) übergeben
  @Input () username                           = '';
  // werte nach außen (an Eltern) übergeben
  @Output () selectedUsr: EventEmitter<string> = new EventEmitter<string> ();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    this.selectedUsr.emit ( this.username );
  }
}
