import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

export abstract class GenericService<T> {

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

  getByID(): Observable<T> {
    return this.http.get<T>(this.resourceUrl);
  }
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourceUrl);
  }
}
