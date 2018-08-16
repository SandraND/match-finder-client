import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-my-groups-page',
  templateUrl: './my-groups-page.component.html',
  styleUrls: ['./my-groups-page.component.css']
})
export class MyGroupsPageComponent implements OnInit {

  constructor(
    private router: Router,
    private groupService: GroupService
  ) { }

  ngOnInit() {
  }

}
