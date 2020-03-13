import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component ( {
  selector   : 'cis-dash',
  templateUrl: './dash.component.html',
  styleUrls  : ['./dash.component.scss']
} )
export class DashComponent implements OnInit {

  constructor( private $user: UserService ) {
    console.log ( $user );
  }

  ngOnInit(): void {
  }

}
