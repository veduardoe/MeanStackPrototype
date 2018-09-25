import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap} from "rxjs/internal/operators";
import { throwError } from 'rxjs';


@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        'Authorization': 'Bearer '
      }
    });

    return next.handle(request);
}

}
