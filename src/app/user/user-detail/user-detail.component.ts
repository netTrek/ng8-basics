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
  userId: number;
  user: User;

  constructor( private $route: ActivatedRoute,
               private $user: UserService ) {
  }

  ngOnInit(): void {
    this.$route.paramMap
        .pipe (
          map ( pMap => + pMap.get ( 'id' ) ),
          tap ( n => this.userId = n ),
          switchMap ( id => this.$user.getUsrById ( id ) )
        )
        .subscribe ( user => this.user = user );
    /*
        .pipe (
          map ( pMap => + pMap.get ( 'id' ) )
        )
        .subscribe ( n => {
          this.userId = n;
          this.$user.getUsrById( n ).subscribe(
            u => this.user = u
          );
        });
    */
  }

}
