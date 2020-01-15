import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: string[] = ['petra', 'frank', 'und viele mehr'];

  constructor() { }

  ngOnInit() {
    for ( const username of this.users ) {
      console.log ( username );
    }
  }

}
