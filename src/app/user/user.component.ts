import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gfk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name = 'Saban';

  constructor() { }

  ngOnInit() {
  }

  chgName() {
    this.name = 'Peter Müller';
  }
}
