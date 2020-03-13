import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component ( {
  selector   : 'cis-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls  : ['./user-detail.component.scss']
} )
export class UserDetailComponent implements OnInit {
  userId: number;

  constructor( private $route: ActivatedRoute ) {
  }

  ngOnInit(): void {
    this.$route.paramMap
        .pipe (
          map ( pMap => + pMap.get ( 'id' ) )
        )
        .subscribe ( n => this.userId = n );
  }

}
