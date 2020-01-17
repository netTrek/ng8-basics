import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineAll, map, switchMap, tap } from 'rxjs/operators';
import { forkJoin, interval, Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';

@Component ( {
  selector   : 'gfk-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls  : [ './user-edit.component.scss' ]
} )
export class UserEditComponent implements OnInit, OnDestroy {

  dirty = true;

  id: number;
  compSub: Subscription = new Subscription ();
  user: User;

  constructor( private $route: ActivatedRoute, private $user: UserService ) {
  }

  ngOnInit() {

    this.compSub.add (
      // this.viaParamMap ()
      this.$route.data.pipe(
        map ( data => data.user as User )
      ).subscribe( user => this.user = user )
    );
  }

  private viaParamMap() {
    return this.$route.paramMap.pipe (
      map ( paramMap => + paramMap.get ( 'id' ) ),
      tap ( id => this.id = id ),
      switchMap ( id => this.$user.getUserById ( id ) )
    )
               .subscribe (
                 user => this.user = user
               );
  }

  ngOnDestroy(): void {
    this.compSub.unsubscribe ();
  }

}
