import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { User } from '../../user';
// KIND
@Component({
  selector: 'gfk-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit, OnChanges {

  @Input() user: User;
  // get user(): User {
  //   return this._user;
  // }
  // @Input()
  // set user( value: User ) {
  //   this._user = value;
  // }
  // private _user: User;

  @Output() selectUsr: EventEmitter<User> = new EventEmitter();

  // [class.selected]="selected"
  @Input()
  @HostBinding ('class.selected')
  selected = false;
  constructor() { }

  ngOnInit() {
  }
  // (click)="clicked()"
  @HostListener ('click')
  clicked() {
    this.selectUsr.emit( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty('selected') ) {
      const userChg: SimpleChange = changes.selected;
      if ( userChg.firstChange ) {
        console.log ( 'erstes mal übermittelt' );
      } else {
        console.log ( `update von ${userChg.previousValue} zu ${userChg.currentValue}` );
      }
      console.log ( userChg.currentValue );
    }
  }

}
