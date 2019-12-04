import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'gfk-user-details',
  templateUrl: './user-details.component.html',
  styleUrls  : [ './user-details.component.scss' ]
} )
export class UserDetailsComponent implements OnInit, OnDestroy {

  id: number;
  user: User;
  private sub: Subscription;

  constructor( private route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit() {
    console.log ( 'comp init' );
    this.sub = this.route.paramMap
                   .pipe (
                     map ( value => + value.get ( 'id' ) ),
                     tap( id => this.id = id ),
                     switchMap( id => this.$user.getUserByID( id ) )
                   )
                   .subscribe (
                     user => this.user = user
                   );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe ();
  }

}
