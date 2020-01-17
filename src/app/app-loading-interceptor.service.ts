import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './loading/loading.service';
import { skipWhile, tap } from 'rxjs/operators';
import { error } from 'util';

@Injectable ( {
  providedIn: 'root'
} )
export class AppLoadingInterceptorService implements HttpInterceptor {

  constructor( private $loading: LoadingService ) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    this.$loading.increment ();
    return next.handle ( req )
               .pipe (
                 skipWhile ( event => !(event instanceof HttpResponse) ),
                 tap (
                   n => this.$loading.decrement (),
                   e => this.$loading.decrement ()
                 )
               );
  }
}
