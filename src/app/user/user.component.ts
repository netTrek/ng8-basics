import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msg-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name = 'Saban Ünlü';

  constructor() { }

  ngOnInit() {
  }

  chgName() {
    this.name = 'Peter Müller';
  }
}
