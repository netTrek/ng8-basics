import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling/error-handling.service';

@Injectable({
  providedIn: 'root'
})
export class AppErrorInterceptorService implements HttpInterceptor {
  constructor( private $err: ErrorHandlingService ) {
  }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    return next.handle( req ).pipe( tap( this.$err )) ;
  }
}
