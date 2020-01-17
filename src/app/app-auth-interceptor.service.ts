import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppAuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const newReq = req.clone( {
      headers: req.headers.set( 'Authorization', 'Basic ' + btoa( 'saban:uenlue' ) )
    });
    return next.handle( newReq );
  }
}
