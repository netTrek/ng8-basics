import { Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'gfk-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  selectUser: EventEmitter<User> = new EventEmitter<User>();

  @Input()
  @HostBinding ('class.selected')
  isSelected = true;

  constructor() { }

  ngOnInit() {
  }
  @HostListener ('click')
  clicked() {
    this.selectUser.emit( this.user );
  }
}
