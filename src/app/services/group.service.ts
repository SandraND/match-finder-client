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

  // getGroups() {
  //   return this.group;
  // }
  // getGames() {
  //   return this.group.games;
  // }

  // getGroup(id: any) {
  //   return this.group.find(group =>
  //     group.id === parseInt(id, 10)
  //   );
  // }
  // deleteOne(id: any) {
  //   return this.group.find(group =>
  //     group.id === parseInt(id, 10)
  //   ).delete();
  // }

  createOne(group: any) {

    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}`, group, options)
    .toPromise();
  }

}
