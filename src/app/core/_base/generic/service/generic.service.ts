import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

export abstract class GenericService<T> {

  readonly apiEndPoint = environment.apiEndPoint;
  readonly apiPublic = environment.publicAPI;

  protected constructor(private http: HttpClient, private url: string) {
  }

  update(model: T): Observable<T> {
    // const copy: T = JSON.parse(JSON.stringify(model));
    return this.http.put<T>(`${this.apiEndPoint}${this.url}`, model);
  }

  save(model: T): Observable<T> {
    // const copy: T = JSON.parse(JSON.stringify(model));
    return this.http.post<T>(`${this.apiEndPoint}${this.url}`, model);
  }
}
