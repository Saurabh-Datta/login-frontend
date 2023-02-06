import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private baseURL = "http://localhost/8081/login";
  constructor(private httpClient: HttpClient) { }

  loginUser(user: User):Observable<object> {
    return this.httpClient.post(`${this.baseURL}`,user);
  }
}
