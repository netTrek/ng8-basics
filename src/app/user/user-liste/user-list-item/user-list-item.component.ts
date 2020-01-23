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

@Component ( {
  selector   : 'msg-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls  : ['./user-list-item.component.scss']
} )
export class UserListItemComponent implements OnInit, OnChanges {
  // werte nach außen (an Eltern) übergeben
  @Output () selectedUsr: EventEmitter<User> = new EventEmitter<User> ();
  @Input () user: User;

  @Input ()
  @HostBinding ( 'class.selected' )
  selected = false; // [class.selected]="selected"

  // werte werden von außen (Eltern) übergeben

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener ( 'click' )
  handleClick() {
    this.selectedUsr.emit ( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes.hasOwnProperty ( 'selected' ) ) {
      const selectedSC: SimpleChange = changes.selected;
      if ( selectedSC.firstChange ) {
        // console.log ( `selected Status erstmals gesetzt` );
      }
      // console.log ( selectedSC.currentValue );
    }
  }
}
