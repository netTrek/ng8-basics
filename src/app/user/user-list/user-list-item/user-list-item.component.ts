import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

  @Input() username: string;

  constructor() { }

  ngOnInit() {
  }

}
