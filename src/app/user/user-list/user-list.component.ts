import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  selectedUsr: string;

  constructor() { }

  ngOnInit() {
  }

}
