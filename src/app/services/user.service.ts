import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {


  private user: any;
  private API_URL = environment.apiURL;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(username: any): any {
    const options = {
      withCredentials: true
    };
    console.log(username);
    console.log(`${this.API_URL}players?q=${username}`);
    return this.httpClient.get(`${this.API_URL}players?q=${username}`, options)
    .toPromise();
  }
}
