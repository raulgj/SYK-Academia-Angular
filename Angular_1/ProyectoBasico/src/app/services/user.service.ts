import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl = environment.apiUrl + "/user/";

  constructor(private _http: HttpClient) {

  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(this.baseUrl);
  }

  getUser(userId: number): Observable<User> {
    return this._http.get<User>(this.baseUrl + userId);
  }
}
