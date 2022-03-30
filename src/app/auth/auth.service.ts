import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {UserModel} from '../model/user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly API_END_POINT;

  constructor(private http: HttpClient) {
    this.API_END_POINT = environment.apiEndPoint;
  }

  public login(userModel: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.API_END_POINT + '/login', userModel);
  }
}
