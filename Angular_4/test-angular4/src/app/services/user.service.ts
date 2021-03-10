import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public baseUrl = environment.apiUrl + "/user/";

  constructor(private _http: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this.baseUrl);
  }

  getUser(userId: number): Observable<IUser> {
    return this._http.get<IUser>(this.baseUrl + userId);
  }

  saveUser(user: IUser) {
    return this._http.post(this.baseUrl, user);
  }

  updateUser(userId: number, user: IUser) {
    return this._http.put(this.baseUrl + userId, user);
  }
}
