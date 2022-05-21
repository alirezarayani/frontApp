import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

export class InterceptService implements HttpInterceptor {
  private readonly CONTACT_TYPE = 'Content-Type';
  private readonly APPLICATION_JSON = 'application/json';
  private readonly apiEndPoint = environment.apiEndPoint;

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const httpRequest = req.clone({url: this.apiEndPoint + req.url, headers: req.headers.set(this.CONTACT_TYPE, this.APPLICATION_JSON)});

    return next.handle(httpRequest);
  }
}
