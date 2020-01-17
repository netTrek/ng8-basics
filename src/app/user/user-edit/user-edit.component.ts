import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineAll, map, switchMap, tap } from 'rxjs/operators';
import { forkJoin, interval, Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  myForm: FormGroup;
  firstnameCtrl: FormControl;
  lastnameCtrl: FormControl;

  constructor( private $route: ActivatedRoute, private $user: UserService, private $fb: FormBuilder ) {
  }

  ngOnInit() {

    this.compSub.add (
      // this.viaParamMap ()
      this.$route.data.pipe (
        map ( data => data.user as User )
      )
          .subscribe ( user => this.intFormModel ( user ) )
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

  private intFormModel( user: User ) {
    this.user   = user;
    this.myForm = this.$fb.group ( {
        id: [ user.id ],
        firstname: [ user.firstname, Validators.required ],
        lastname: [ user.lastname, Validators.required ],
        age: [ user.age ],
      }
    );
    this.firstnameCtrl = this.myForm.get( ['firstname'] ) as FormControl;
    this.lastnameCtrl = this.myForm.get( ['lastname'] ) as FormControl;
  }
}
