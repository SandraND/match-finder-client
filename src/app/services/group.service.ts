import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private group: Array<any> = [
    {
      games: ['Warhammer40k', 'Magic', 'X-Wing'],
    }
  ];
  private groupChange: Subject<any> = new Subject();

  private API_URL = environment.apiURL;

  groupChange$: Observable<any> = this.groupChange.asObservable();

  getGroups() {
    return this.group;
  }
  // getGames() {
  //   return this.group.games;
  // }
  getGroup(id: any) {
    return this.group.find(group =>
      group.id === parseInt(id, 10)
    );
  }
  deleteOne(id: any) {
    return this.group.find(group =>
      group.id === parseInt(id, 10)
    ).delete();
  }

  // createOne() {

  // }


  constructor(
    private httpClient: HttpClient
  ) { }


}
