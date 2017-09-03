import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpService } from '../../../common/services/http.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from '../../../common/services/authentication.service';

@Injectable()
export class UsersListService extends HttpService {

  constructor(public _http: Http, private _authService: AuthenticationService) {
    super(_http);
  }

  public getAll(): Observable<Array<User>> {
    const users: Array<User> = [];
    const url = `${this.apiBaseURL}/users`;

    return this.get(url, this._authService.user.api_token);
  }

  public setUser(user: User): Observable<User> {
    const url = `${this.apiBaseURL}/users`;
    return this.post(url, user, this._authService.user.api_token);
  }

  public getSingle(id: number): Observable<User> {
    const url = `${this.apiBaseURL}/users/${id}`;
    return this.get(url, this._authService.user.api_token);
  }


}
