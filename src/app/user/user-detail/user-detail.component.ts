import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'cis-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls  : ['./user-detail.component.scss']
} )
export class UserDetailComponent implements OnInit {
  user: User;

  constructor( private $route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.$route.data.pipe ( map ( data => data.user as User ) )
        .subscribe ( user => this.user = user );
  }

}
