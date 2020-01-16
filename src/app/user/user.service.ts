import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable ( {
  providedIn: 'root'
} )
export class UserService {
  value$: BehaviorSubject<number> = new BehaviorSubject ( 123 );

  constructor() {
  }
}
