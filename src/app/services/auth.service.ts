import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any;
  private password: any;
  private userChange: Subject<any> = new Subject();

  private API_URL = environment.apiURL;

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  private setUser(user?: any) {
    this.user = user;
    this.password = this.password;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  login(user: any): Promise<any> {

    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/login`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

}