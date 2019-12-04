import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  error$: BehaviorSubject<string> = new BehaviorSubject(undefined)
  constructor() { }
}
