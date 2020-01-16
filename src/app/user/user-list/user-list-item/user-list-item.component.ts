import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges
} from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'gfk-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit, OnChanges, OnDestroy {
  get isSelected(): boolean {
    return this._isSelected;
  }

  @Input()
  @HostBinding ('class.selected')
  set isSelected( value: boolean ) {
    this._isSelected = value;
  }

  @Input()
  user: User;

  @Output()
  selectUser: EventEmitter<User> = new EventEmitter<User>();

  // tslint:disable-next-line
  private _isSelected = true;


  constructor() {
    // console.log ( 'constructor' );
  }

  ngOnInit() {
    // console.log ( 'init' );
  }
  @HostListener ('click')
  clicked() {
    this.selectUser.emit( this.user );
  }

  ngOnChanges( changes: SimpleChanges ): void {
    // console.log ( 'change' );
    if ( changes.hasOwnProperty( 'isSelected') ) {
      const selectedState: SimpleChange = changes.isSelected;
      if ( selectedState.firstChange ) {
        // console.log ( 'initial definiert' );
      }
    }
  }

  ngOnDestroy(): void {
    // console.log ( 'destroy' );
  }
}
