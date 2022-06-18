import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {BizEntityModel} from '../../../../pages/model/bizEntity.model';

export abstract class GenericService<T extends BizEntityModel> {

  readonly apiEndPoint = environment.apiEndPoint;
  readonly apiPublic = environment.publicAPI;
  protected resourceUrl;

  protected constructor(private http: HttpClient, private url: string) {
    this.resourceUrl = url;
  }

  update(model: T): Observable<T> {
    return this.http.put<T>(this.resourceUrl, model);
  }

  save(model: T): Observable<T> {
    return this.http.post<T>(this.resourceUrl, model);
  }

  getListByID(id?: number): Observable<T[]> {
    return this.http.get<T[]>(this.resourceUrl + '/' + id);
  }

  getByID(id?: number): Observable<T> {
    return this.http.get<T>(this.resourceUrl + '/' + id);
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourceUrl);
  }
}
