import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppErrorService } from './app-error.service';

@Injectable ( {
  providedIn: 'root'
} )
export class AppErrorInterceptorService implements HttpInterceptor {

  constructor( private $error: AppErrorService ) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle ( req )
               .pipe ( tap (
                 n => {
                 },
                 err => this.$error.sendError ( err.message ),
                 () => {
                 }
               ) );
  }
}
