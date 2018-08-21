import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private group: any = [
    {
      games: ['Warhammer40k', 'Magic', 'X-Wing'],
    }
  ];

  private API_URL = environment.apiURL + 'groups';


  constructor(
    private httpClient: HttpClient
  ) { }

  getRecentGroups() {
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.API_URL}/recent`, options)
    .toPromise();
  }

  getGroups() {

    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.API_URL}`, options)
      .toPromise();
  }

  getGames() {
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.API_URL}/games`, options)
    .toPromise();
  }

  getAllGames() {
    const options = {
      withCredentials: true
    };

    return this.httpClient.get(`${this.API_URL}/games/all`, options)
    .toPromise();
  }

  getGroup(id: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`, options)
    .toPromise();
  }

  searchGroup(groupname: any): any {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/search?q=${groupname}`, options)
    .toPromise();
  }

  createOne(group: any) {

    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}`, group, options)
    .toPromise();
  }

  acceptOne(userId: any, groupId: any): Promise<any> {
    const options = {
      withCredentials: true
    };

    return this.httpClient.post(`${this.API_URL}/apply/${userId}&${groupId}`, options)
    .toPromise();
  }

  getAppliedGroups(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/applied`, options)
    .toPromise();
  }

}
